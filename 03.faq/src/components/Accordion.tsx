import { useState } from "react"
import {data} from "../utils/data"



const Accordion = () => {
    const [index, setIndex] = useState();

  return (
    <div>
        {
            data.map((d,i)=><SingleAccord text = {d.text} detail = {d.detail} show={i==index} myindex={i} setIndex={setIndex}/>)
        }
    </div>
  )
}

const SingleAccord = ({text, detail, show, myindex, setIndex}:any)=>{

    return (
        <div className="singleaccord">
            <div className="text">
                <p>{text}</p>
                <button onClick={()=>{show ? setIndex(-1) : setIndex(myindex) }}>V</button>
            </div>
            {show && 
            <div className="detail">
                {detail}
            </div>}
        </div>
    )
}

export default Accordion