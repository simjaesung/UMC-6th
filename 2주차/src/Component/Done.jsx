function Done({a, todo, setTodo, i}){
    return(
      <div className="task">
        <div className="task-name">{a.content}</div>
        <div className="taskbtn">
            <button onClick={()=>{
              let copy = [...todo];
              copy.splice(i,1);
              setTodo(copy);
            }}>삭제</button>
        </div>
      </div>
    )
}

export default Done;