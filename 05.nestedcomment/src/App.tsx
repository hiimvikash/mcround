import { useState } from 'react'
import './App.css'
import {data} from "./utils/data"


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="main">
    <div className="container">
        <h1>Nested Comment</h1>
        <div className="commentcontainer">
            <CommentList data = {data}/>
        </div>
    </div>
   </div>
  )
}








function SingleComment ({name, text} : {name : string, text : string}){

  return (
    <div className='singlecomment'>
      <div className='userinfo'>
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-image" />
        <span><b>{name}</b></span>
      </div>
        <p>{text}</p>
    </div>

  )
}

function CommentList ({data}:{data : any}){
  return (
    <>
    {
      data.map((c:any)=>(
        <div className='maincomment'>

          <SingleComment name={c.name} text={c.text}/>
          {
            c.replies && (
              <div className="replies">
                <CommentList data={c.replies}/>
              </div>
            )
          }
        </div>
        
      ))
    }
    </>
  )
}

export default App
