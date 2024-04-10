import './App.css';
import todolist from './data.js'
import Task from './component/Task.js'
import Done from './component/Done.js';
import {useState } from 'react';

function App() {
  
  let [todo,setTodo] = useState(todolist);
  let [newTask,setNewTask] = useState('');
  let [done, setDone] = useState(false);
  return (
    <div className="container">
      <div className="content">
        <div className = "title">
          <h1>UMC Study Plan</h1>
        </div>
        <div className="input-box">
          <input placeholder = "UMC 스터디 계획을 작성해보세요!"
          id = "newtask"
          onChange={(e)=>{setNewTask(e.target.value); 
          console.log(e.target.value);}}/>
          <div>
            <button onClick={()=>{
              if(newTask){
                let newTodo = [...todo];
                newTodo.push({
                  id: newTodo.length, content: newTask, isDone: false
                })
                setTodo(newTodo);
                document.getElementById('newtask').value = null;
              }
            }}>등록</button>
          </div>
          
        </div>
        <div className="todolist">
          <div className="todo">
            <h4>해야할 일</h4>
            {
              todo.map(function(a,i){
                if(!a.isDone){
                  return(
                    <div className="task">
                      <div className="task-name">{a.content}</div>
                      <div className="taskbtn">
                          <button onClick={()=>{
                            a.isDone = true;
                            setDone(!done);
                          }}>완료</button>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
          <div className="done">
            <h4>해낸 일</h4>
            {
              todo.map(function(a,i){
                if(a.isDone){
                  return(
                    <div className="task">
                      <div className="task-name">{a.content}</div>
                      <div className="taskbtn">
                          <button onClick={()=>{
                            let delTodo = [...todo];
                            delTodo.splice(i,1);
                            setTodo(delTodo);
                            setDone(!done);
                          }}>삭제</button>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
