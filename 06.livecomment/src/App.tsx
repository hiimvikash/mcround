import { useEffect, useState } from 'react';
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import { sendChat } from './utils/livechatslice';
import { generateRandomComment, getName } from './utils/help';


function App() {
  const {messages} = useSelector((state:any)=>state.chat)
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  
  useEffect(()=>{
    const id = setInterval(()=>{
      dispatch(sendChat({
        name : getName(),
        text : generateRandomComment()
      }))
    },2000)

    return ()=>clearInterval(id);
  }, [])

  return (
    <div className='main'>
      <div className="container">
          <h1>Live Comment</h1>
          <div className="livecomment-box">
              <div className="loadingcomments">

                  {
                    messages.map((message:any, idx : any)=><SingleComment key={idx} name={message.name} text={message.text}/>)
                  }
              </div>
              <div className="commentinput">
                <input type="text" value={textInput} onChange={(e:any)=>{setTextInput(e.target.value)}} placeholder='Chat...'/>
                <button onClick={()=>{
                  dispatch(sendChat({
                    name : "Vikash",
                    text : textInput
                  }))
                  setTextInput("");
                }}>🚀</button>
              </div>
          </div>
      </div>
    </div>
  )
}

function SingleComment({name, text} : {name : string, text : string}){
  return (
    <div className="singlecomment">
      <div className="userinfo">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-image"
        />
        <span>
          <b>{name}</b>
        </span>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default App
