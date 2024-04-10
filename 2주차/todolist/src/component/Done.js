import { useEffect } from "react";

function Done({a}){
    useEffect(()=>{
      
    },[a]);
    return(
      <div className="task">
        <div className="task-name">{a.content}</div>
        <div className="taskbtn">
            <button>삭제</button>
        </div>
      </div>
    )
}

export default Done;