import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <h1>Enter your OTP</h1>
        <div className="otpcontainer">
          <OtpInput length={5} />
        </div>
      </div>
    </div>
  );
}

function OtpInput({ length }: { length: number }) {
  const refArr = useRef<any>([]);
  const [inputArr, setInputArr] = useState(new Array(length).fill(""));
  useEffect(() => {
    refArr.current[0].focus();
  }, []);

  function handlechange(e:any, index:number){
    const value = e.target.value.slice(-1).trim(); // this will only take last digit
    console.log("hc");
    if(isNaN(value)) return;
    const updatedArr = [...inputArr];
    updatedArr[index] = value;
    setInputArr(updatedArr);
    value && refArr.current[index+1]?.focus();
  }

  function handlekeydown(e:any, index:number){
    if(!e.target.value && e.key === "Backspace"){
      console.log("hb");
      refArr.current[index-1]?.focus();
    }
    if(e.target.value && e.key === "ArrowRight")
      refArr.current[index+1]?.focus();
    if(e.target.value && e.key === "ArrowLeft"){
      const prevInput = refArr.current[index - 1];
      prevInput?.focus();
    }
  }
  return (
    <div>
      {inputArr.map((inp, idx) => (
        <input
          ref={(input: any) => (refArr.current[idx] = input)}
          type="string"
          value={inputArr[idx]}
          onChange={ (e) => handlechange(e, idx)}
          onKeyDown={(e) => handlekeydown(e, idx)}
        />
      ))}
    </div>
  );
}

export default App;
