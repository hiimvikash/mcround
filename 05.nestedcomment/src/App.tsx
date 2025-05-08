import { useState } from "react";
import "./App.css";
import { data } from "./utils/data";

function App() {
  const [commentData, setCommentData] = useState(data);

  return (
    <div className="main">
      <div className="container">
        <h1>Nested Comment</h1>
        <div className="commentcontainer">
          <CommentList data={commentData} setCommentData={setCommentData}/>
        </div>
      </div>
    </div>
  );
}

function SingleComment({
  name,
  text,
  id,
  setCommentData
}: {
  name: string;
  text: string;
  id: string;
  setCommentData:any;
}) {
  const [showInput, setShowInput] = useState(false);
  const [inputtext, setInputtext] = useState("");
  function handleclick (){
    const replyobj: any = {
      name: "Vikash Gupta",
      text: inputtext,
      id: Math.random().toString(36).slice(2, 10),
      replies: [],
    };
    setCommentData((prev:any)=> addReplyById(prev, id, replyobj));
    setInputtext("");
  }

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
      {showInput && (
        <div className="inputcontainer">
            <input type="text" placeholder="Add your comment" value={inputtext} onChange={(e:any)=>{setInputtext(e.target.value)}}/>
            <button onClick={handleclick}>reply</button>
        </div>
      )}
      <button onClick={()=>{setShowInput(!showInput)}}>{showInput ? "Hide" : "Comment"}</button>
    </div>
  );
}

function CommentList({ data, setCommentData }: { data: any, setCommentData:any }) {

  return (
    <>
      {data.map((c: any) => (
        <div className="maincomment" key={c.id}>
          <SingleComment name={c.name} text={c.text} id={c.id} setCommentData={setCommentData} />
          {c.replies && (
            <div className="replies">
              <CommentList data={c.replies} setCommentData={setCommentData}/>
            </div>
          )}
        </div>
      ))}
      
    </>
  );
}


function addReplyById(comments:any, id:any, replyobj:any){
  return comments.map((c:any)=>{
      if(c.id === id) {
        return {
          ...c,
          replies : [replyobj, ...c.replies]
        }
      }
      else if(c.replies && c.replies.length > 0){
        return {
          ...c,
          replies : addReplyById(c.replies, id, replyobj)
        }
      }
      else return c;
  })
}

export default App;
