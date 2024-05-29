import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
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
  let [page, setPage] = useState(1);
  const target = useRef(null);

  const fetchMovies = async (page) => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        params: {
          api_key: "5009ee1ef99802b8b3a1b0ccd69e274c", // 여기에 TMDB API 키를 입력하세요
          language: "ko-KR", // 원하는 언어 설정
          page: page,
        },
      });
      let tmp = [...movies, ...response.data.results];
      setMovies(tmp); // 영화 데이터 상태 업데이트
      setTimeout(() => {
        setLoading(1);
      }, 500);
    } catch (error) {
      console.error("영화 데이터를 가져오는 데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchMovies(page);
    console.log(page);
  }, [page]);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setLoading(0);
        setPage((prev) => prev + 1);
        // 추가 작업을 여기에 구현할 수 있습니다.
      }
    });
  });

  return (
    <>
      <MoviesContainer>
        {movies.map(function (movie, i) {
          return <Card movie={movie} key={i} />;
        })}
      </MoviesContainer>
      {loading ? (
        <div style={{ height: "10px", backgroundColor: "black" }} ref={target}></div>
      ) : (
        <SpinnerBox>
          <Spinner animation="border" variant="secondary" style={{ width: "5rem", height: "5rem" }} />
        </SpinnerBox>
      )}
      <div style={{ height: "10px", backgroundColor: "white" }} ref={target}></div>
    </>
  );
}
export default NowPlaying;
