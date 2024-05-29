import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
`;

let PageNationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 10vh;
`;
let PageNationBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  color: white;
  width: 10%;
  > div {
    cursor: pointer;
  }
`;

function Popular() {
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(0);
  let { page } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: "5009ee1ef99802b8b3a1b0ccd69e274c", // 여기에 TMDB API 키를 입력하세요
            language: "ko-KR", // 원하는 언어 설정
            page: page,
          },
        });
        setMovies(response.data.results); // 영화 데이터 상태 업데이트
        setTimeout(() => {
          setLoading(1);
        }, 500);
      } catch (error) {
        console.error("영화 데이터를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      {loading ? (
        <MoviesContainer>
          {movies.map(function (movie, i) {
            return <Card movie={movie} key={i} />;
          })}
        </MoviesContainer>
      ) : (
        <SpinnerBox>
          <Spinner animation="border" variant="secondary" style={{ width: "5rem", height: "5rem" }} />
        </SpinnerBox>
      )}
      <PageNationContainer>
        <PageNationBox>
          {page > 1 ? (
            <div
              onClick={() => {
                page--;
                navigate("/popular/" + page);
              }}>
              ◀︎
            </div>
          ) : (
            <div>⛔︎</div>
          )}
          {page}
          <div
            onClick={() => {
              page++;
              navigate("/popular/" + page);
            }}>
            ▶︎
          </div>
        </PageNationBox>
      </PageNationContainer>
    </>
  );
}

export default Popular;
