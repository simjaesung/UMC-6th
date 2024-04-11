function Task({a, todo, setTodo, i}){
    return(
      <div className="task">
        <div className="task-name">{a.content}</div>
        <div className="taskbtn">
            <button onClick={()=>{
              let copy = [...todo];
              copy[i].isDone = true;
              setTodo(copy);
            }}>완료</button>
        </div>
      </div>
    )
}

export default Task;