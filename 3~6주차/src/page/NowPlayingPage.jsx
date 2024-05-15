import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Card from "../component/Card";

let MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100%;
  width: 100%;
  gap: 5px;
`;

let SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 90vh;
  overflow: hidden;
`;

function NowPlaying() {
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(0);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
          params: {
            api_key: "5009ee1ef99802b8b3a1b0ccd69e274c", // 여기에 TMDB API 키를 입력하세요
            language: "ko-KR", // 원하는 언어 설정
          },
        });
        setMovies(response.data.results); // 영화 데이터 상태 업데이트
        setTimeout(() => {
          setLoading(1);
          console.log(movies);
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
            return <Card movie={movie} />;
          })}
        </MoviesContainer>
      ) : (
        <SpinnerBox>
          <Spinner animation="border" variant="secondary" style={{width: "5rem", height: "5rem"}} />
        </SpinnerBox>
      )}
    </>
  );
}

export default NowPlaying;
