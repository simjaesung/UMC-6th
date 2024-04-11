import { useDispatch } from 'react-redux';
import {closeModal} from '../store.js'
function Modal(){
    let dispatch = useDispatch();
    return(
        <div className="modal-bg">
            <div className="modal">
                <h2>안녕하세요</h2>
                <p>모달 내용은 어쩌고 저쩌고</p>
                <button onClick={()=>{console.log("모달이 꺼짐");
            dispatch(closeModal())}}>닫기</button>
            </div>
        </div> 
    )
}

export default Modal;