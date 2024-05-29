import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  color: aliceblue;
  border: 2px solid red;
  position: relative;
`;

let MoviePoster = styled.div`
  height: 80%;
`;

let MovieInfor = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: ${(props) => props.size || "70%"};
`;

let MovieHiddenInfor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: ${(props) => props.size || "70%"};
  padding: 10px;
  opacity: 0.5;
  color: white;
  div {
    overflow: hidden;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
  }
`;

function Card({ movie, size }) {
  let navigate = useNavigate();
  let [hover, showHover] = useState(false);
  return (
    <>
      <MovieContent
        onMouseEnter={() => {
          showHover(true);
        }}
        onMouseLeave={() => {
          showHover(false);
        }}
        onClick={() => {
          navigate("/movies/" + movie.id, { state: movie });
        }}>
        {hover ? (
          <MovieHiddenInfor size={size}>
            <div>{movie.original_title}</div>
            <div style={{ paddingTop: "10px" }}>{movie.overview}</div>
          </MovieHiddenInfor>
        ) : (
          <>
            <MoviePoster>
              <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            </MoviePoster>
            <MovieInfor size={size}>
              <div style={{ width: "60%" }}>{movie.original_title}</div>
              <div style={{ textAlign: "center" }}>⭐️ {movie.vote_average}</div>
            </MovieInfor>
          </>
        )}
      </MovieContent>
    </>
  );
}

export default Card;
