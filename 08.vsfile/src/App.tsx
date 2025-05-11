import { useState } from "react";
import "./App.css";
import { data } from "./utils/data";
function App() {
  const [explorerData, setExplorerData] = useState(data);
  return (
    <div className="main">
      <div className="container">
        <h1>File Explorer</h1>
        <div className="explorercontainer">
          <ExploreList data={explorerData} setExplorerData={setExplorerData} />
        </div>
      </div>
    </div>
  );
}

function SingleObject({
  name,
  type,
  setExplorerData,
  id,
}: {
  name: string;
  type: string;
  children?: any;
  setExplorerData: any;
  id:string;
}) {
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const [typy, setTypy] = useState("");

  const handleNfoClick = (e:any) => {
    e.stopPropagation();
    setTypy("fo");
    !showInput && setShowInput((prev) => !prev);
  };
  const handleNfiClick = (e:any) => {
    e.stopPropagation();
    setTypy("fi");
    !showInput && setShowInput((prev) => !prev);
  };
  const handleAddition = ()=>{
    if(inputText.trim()==="") return;

    const addobj:any = {
      id: Math.random().toString(36).slice(2, 10),
      name : inputText,
      type : typy==="fo" ? "folder" : "file",
    }
    if(typy==="fo"){
      addobj["children"]=[];
    }
    setExplorerData((prev:any)=> addObjById(prev, id, addobj));
    setShowInput(false);
  }
  const handleInputChange = (e:any)=>{
    setInputText(e.target.value);
  }
  return (
    <>
      {type === "folder" && (
        <>
          <div className="singlefolder single" onClick={()=>{ setShowInput(false)}}>
            <p>🗂️ {name}</p>
            <div className="actionbutton">
              <button onClick={handleNfoClick}>nfo</button>
              <button onClick={handleNfiClick}>nfi</button>
            </div>
          </div>
          {showInput && (
            <>
              <span>{typy === "fo" ? <>🗂️ </> : <>📄 </>}</span>
              <input type="text" value={inputText} onChange={handleInputChange} autoFocus/>
              <button onClick={handleAddition}>+</button>
            </>
          )}
        </>
      )}
      {type === "file" && <div className="singlefile single">📄 {name}</div>}
    </>
  );
}

function ExploreList({
  data,
  setExplorerData,
}: {
  data: any;
  setExplorerData: any;
}) {
  
  return (
    <>
      {data.map((each: any, index: any) => (
        <div key={each.id} className="mainExplorer">
          <SingleObject
            name={each.name}
            type={each.type}
            id={each.id}
            setExplorerData={setExplorerData}
          />
          {each.type === "folder" && each.children.length > 0 && (
            <div className="childExplorer">
              <ExploreList
                data={each.children}
                setExplorerData={setExplorerData}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
}



function addObjById(explorer:any, id:any, addobj:any){
  return explorer.map((each:any)=>{
      if(each.id === id && each.type==="folder"){
          return {
            ...each,
            children : [addobj, ...each.children]
          }
      }
      else if(each.children && each.children.length > 0){
        return {
          ...each,
          children : addObjById(each.children, id, addobj)
        }
      }
      return each;
  })
}

export default App;
