import './App.css';
import Modal from './component/Modal';
import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {openModal, closeModal} from './store.js'

function App() {
  let [modal,setModal] = useState(0);
  let dispatch = useDispatch();
  let redux = useSelector((state) => {return state});
  console.log(redux.modal);

  return (
    <div className="App">
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={()=>{dispatch(openModal())}}>버튼 열기</button>
      {
        redux.modal? <Modal/> : null
      }
    </div>
  );
}

export default App;
