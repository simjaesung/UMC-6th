import {useNavigate} from 'react-router-dom';

function Main(){
    let navigate = useNavigate();
    return (
        <div>
            <h2>2주차 과제</h2>
            <h4>실습</h4>   
            <button onClick={()=>{navigate('/count')}}>Counter</button>
            <button onClick={()=>{navigate('/init')}}>Modal</button>
            <h4>미션</h4>   
            <button onClick={()=>{navigate('/todo')}}>Todo</button>
        </div>
    )
}

export default Main;