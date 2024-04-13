import { useState, useEffect } from "react";
import movies from "../Moviedata.js";

function Movie(){
    let [movielist, setMovieList] = useState(movies);
    console.log(movielist);
    return (
        <div style={{background : 'black'}}>
            <div className="movie-nav">
                <h2 className="nav-title">UMCflix</h2>
            </div>
            <div className="movie-list">
                {
                    movielist.results.map(function(content,i){
                        return(
                            <Content content={content} i = {i} key = {i}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

function Content({content,i}){
    let [show,setShow] = useState(0);
    return(
        <div className="movie-content"
         onMouseEnter={()=>{setShow(1);}}
         onMouseLeave={()=>{setShow(0);}}>
            {
                show? 
                <ContentInfor content={content}/> : null
            }
            <div style={{height : "80%"}}>
                <img src = {"https://image.tmdb.org/t/p/w500"+content.poster_path}/>
            </div>
            <div className="content-inform">
                <div>{content.original_title}</div>
                <div>{content.vote_average}</div>
            </div>
        </div>
    )
}

function ContentInfor({content}){
    let [fade, setFade] = useState('');
    
    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100);
        return()=>{
            setFade('');
        }
    },[content])

    return(
        <div className={"content-des start " +fade}>
            <div className="des-title">
                {content.title}
            </div>
            <div className="des-overview">
                {content.overview}
            </div>
        </div>
    )
}

export default Movie;