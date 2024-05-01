import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import MoiveDetail from "../component/MovieDetail";

let MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100%;
  width: 100%;
  gap: 5px;
`;
let MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  color: aliceblue;
  border: 2px solid red;
`;

let MoviePoster = styled.div`
  height: 80%;
`;

let MovieInfor = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 80%;
`;
let SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 90vh;
`;

function Popular() {
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(0);
  let [modal, setModal] = useState(0);
  let [num, setNum] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "5009ee1ef99802b8b3a1b0ccd69e274c", // 여기에 TMDB API 키를 입력하세요
              language: "ko-KR", // 원하는 언어 설정
            },
          },
        );
        setMovies(response.data.results); // 영화 데이터 상태 업데이트
        setTimeout(() => {
          setLoading(1);
        }, 500);
      } catch (error) {
        console.error("영화 데이터를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchMovies();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      {loading ? (
        <MoviesContainer>
          {movies.map(function (movie, i) {
            return (
              <MovieContent key={i}>
                <MoviePoster
                  onClick={() => {
                    setModal(1);
                    setNum(i);
                  }}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  />
                </MoviePoster>
                <MovieInfor>
                  <div style={{width: "60%"}}>{movie.original_title}</div>
                  <div style={{textAlign: "center"}}>
                    ⭐️ {movie.vote_average}
                  </div>
                </MovieInfor>
                {modal ? (
                  <MoiveDetail
                    movies={movies}
                    i={i}
                    num={num}
                    setModal={setModal}
                  />
                ) : null}
              </MovieContent>
            );
          })}
        </MoviesContainer>
      ) : (
        <SpinnerBox>
          <Spinner
            animation="border"
            variant="secondary"
            style={{width: "5rem", height: "5rem"}}
          />
        </SpinnerBox>
      )}
    </>
  );
}

export default Popular;
