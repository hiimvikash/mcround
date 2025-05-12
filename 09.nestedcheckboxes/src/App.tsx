import { useEffect, useState } from "react";
import "./App.css";
import { datas } from "./utils/data";

function App() {
  const [checky, setChecky] = useState({});


  return (
    <div className="main">
      <div className="container">
        <h1>Nested Checkboxes</h1>
        <div className="checkboxes-container">
          <CheckboxesList data={datas} checky={checky} setChecky={setChecky}/>
        </div>
      </div>
    </div>
  );
}

function CheckboxesList({ data, checky, setChecky }: { data: any, checky:any, setChecky:any }) {

  const handleCheckboxChange = (val:any, node:any)=>{
    setChecky((prev:any)=>{

    // Step 1 : Change what you have clicked
    const newState = {...prev, [node.id] : val};



    // Step 2 : IF parents is changed then all of it's children should also follow same.
    function updateChildren(node:any){
      if(!node.children) return;

      node.children.forEach((child:any)=>{
        newState[child.id] = val; //  Parent → Children: selecting a parent selects all its children
        updateChildren(child);
      })
    }
    updateChildren(node);


    // Step 3 : IF all children are checked then mark the parents as checked

    function verifyCheck(node:any){
      if(!node.children) return newState[node.id] || false;

      let allChildrenChecked = true;

      for(const child of node.children){
        if(!verifyCheck(child)){
          allChildrenChecked = false;
        }
      }
      return newState[node.id] = allChildrenChecked;
    }

    datas.forEach((node:any)=>{ verifyCheck(node)});
    return newState;
  }) 
}



  return data.map((node: any) => (
    <div key={node.id} className="parent-container">
      <input type="checkbox" checked={checky[node.id]} onChange={(e)=>handleCheckboxChange(e.target.checked, node)}/>
      <label>{" " + node.name}</label>

      {node.children && node?.children.length > 0 && (
        <div className="children-container">
          <CheckboxesList data={node.children} checky={checky} setChecky={setChecky}/>
        </div>
      )}
    </div>
  ));
}

export default App;
