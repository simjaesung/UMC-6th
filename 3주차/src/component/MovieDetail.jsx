import styled from 'styled-components'
import CloseButton from 'react-bootstrap/CloseButton';
import '../App.css';

let MovieDetailBG = styled.div`
    display : flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;

`
let MovieDetailInfor = styled.div`
    width: 320px;
    background: white;
    color : black;
    border-radius: 4px;
`

function MoiveDetail({movies,setModal,num,i}){
    console.log(movies[num]);
    if(i == num){
        return(
            <MovieDetailBG>
                <MovieDetailInfor>
                    <div>
                        <img src = {"https://image.tmdb.org/t/p/w500"+movies[num].poster_path}/>
                    </div>
                    <div style={{padding:"10px"}}>
                        <h5>{movies[num].original_title}</h5>
                        <div>{movies[num].overview}</div>
                        <div style={{textAlign:'right'}}>
                            <button onClick={()=>{setModal(0);}}>
                                <CloseButton disabled/>
                            </button>
                        </div>
                    </div>
    
                </MovieDetailInfor>
            </MovieDetailBG>
        )
    }
   
}

export default MoiveDetail;