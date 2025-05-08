import { useState } from "react";
import "./App.css";

function App() {
  const [chips, setChips] = useState<String[]>([]);
  const [text, setText] = useState("");

  function handleSubmit(e:any) {
    e.preventDefault();
    if(text.trim()!="") setChips((prev)=>[...prev, text]);
    setText("");
  }

  return (
    <div className="main">
      <div className="container">
        <h1>Chips Input</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            placeholder="Type and Press ENTER"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <div className="chips">
          {
            chips.map((text, index)=><SingleChip key={index} text={text} handleRemove = {()=>{setChips((prev:any)=>prev.filter((t:string,i:number)=> i!=index))}}/>)
          }
        </div>
      </div>
    </div>
  );
}

function SingleChip ({text, handleRemove}:any){
  const handleClick = ()=>{
    handleRemove();
  }

  return (
    <span className="chip" onClick={handleClick}>
      {text}
    </span>
  )
}

export default App;
