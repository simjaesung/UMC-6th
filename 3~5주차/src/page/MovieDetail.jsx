import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

let MovieDetailBG = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => "https://image.tmdb.org/t/p/w500" + props.bg});
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
`;

let MovieDetailBox = styled.div`
  display: flex;
  width: 70%;
  height: 80%;
`;

let MovieDetailImg = styled.div`
  width: 40%;
  background-image: url(${(props) => "https://image.tmdb.org/t/p/w500" + props.bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

let MovieDetailInfor = styled.div`
  display: flex;
  width: 60%;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  font-size: 120%;
  div {
    padding: 3%;
  }
`;

function MoiveDetail() {
  const { state } = useLocation();
  let tmp = Math.floor(state.vote_average);
  const averStar = (val) => {
    return "⭐️".repeat(val);
  };

  return (
    <MovieDetailBG bg={state.backdrop_path}>
      <MovieDetailBox>
        <MovieDetailImg bg={state.poster_path}></MovieDetailImg>
        <MovieDetailInfor>
          <div>
            <h1>{state.original_title}</h1>
          </div>
          <div>
            <h3>
              평점 : {averStar(tmp)} ({tmp})
            </h3>
          </div>
          <div>
            <h3>개봉일 :{state.release_date}</h3>
          </div>
          <div>
            <h3>줄거리</h3>
          </div>
          <div>{state.overview ? <p>{state.overview}</p> : <p>TMDB에서 제공하는 줄거리가 없습니다.</p>}</div>
        </MovieDetailInfor>
      </MovieDetailBox>
    </MovieDetailBG>
  );
}

export default MoiveDetail;
