import { useEffect } from "react";

function Task({a}){
    return(
      <div className="task">
        <div className="task-name">{a.content}</div>
        <div className="taskbtn">
            <button onClick={()=>{
              a.isDone = true;
            }}>완료</button>
        </div>
      </div>
    )
}

export default Task;