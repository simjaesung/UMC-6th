import Modal from './Modal.jsx';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {openModal } from '../store.js';

function Init() {
  let dispatch = useDispatch();
  let redux = useSelector((state) => {return state});
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

export default Init;
