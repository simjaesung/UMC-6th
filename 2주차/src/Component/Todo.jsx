import '../App.css';
import todolist from '../data.js'
import Task from './Task.jsx'
import Done from './Done.jsx';
import { useState } from 'react';

function Todo() {
  
  let [todo,setTodo] = useState(todolist);
  let [newTask,setNewTask] = useState('');
  return (
    <div className="container">
      <div className="content">
        <div className = "title">
          <h1>UMC Study Plan</h1>
        </div>
        <div className="input-box">
          <input placeholder = "UMC 스터디 계획을 작성해보세요!"
          id = "newtask"
          onChange={(e)=>{setNewTask(e.target.value);}}/>
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
                    <Task a = {a} todo = {todo} setTodo = {setTodo} i = {i}/>
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
                    <Done a = {a} todo = {todo} setTodo = {setTodo} i = {i}/>
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

export default Todo;
