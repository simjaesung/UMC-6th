import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../component/Card";
import useDebounce from "../component/Debounce";
import Spinner from "react-bootstrap/Spinner";
let HomeBanner = styled.div`
  display: flex;
  color: black;
  background: DDDDDD;
  height: 30vh;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
`;

let HomeSearch = styled.div`
  display: flex;
  color: white;
  background: black;
  height: 80vh;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  font-size: 30px;
`;

let SearchBox = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  width: 70%;
`;
let Search = styled.input`
  width: 70%;
  height: 5vh;
  text-align: center;
  border-radius: 20px;
`;

let MoviesContainer = styled.div`
  display: ${(props) => props.dis};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  height: 100%;
  width: 70%;
  gap: 5px;
  padding: 20px;
  margin-top: 10px;
  border-radius: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }
  /* 스크롤바 트랙 (바탕) 스타일 */
  &::-webkit-scrollbar-track {
    background: #eeeeee; /* 트랙의 배경색 */
  }

  /* 스크롤바 핸들 (움직이는 부분) 스타일 */
  &::-webkit-scrollbar-thumb {
    background: #76abae; /* 핸들의 배경색 */
    border-radius: 6px; /* 핸들의 모서리 둥글기 */
  }
`;

let LoadinContainer = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

function Home() {
  const [movies, setMovies] = useState([]); //API에서 받아온 영화목록 저장
  let [query, setQuery] = useState(""); //검색용어 저장
  let [dis, setDis] = useState("none");
  //검색 결과 스타일 컴포넌트 컨테이너의 props
  let [loading, setLoading] = useState(0);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (query) {
      searchMovies();
      setLoading(1);
      setDis("grid");
      console.log(query);
    }
  }, [debouncedQuery]);

  const searchMovies = async (e) => {
    const apiKey = "5009ee1ef99802b8b3a1b0ccd69e274c";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    setDis("none");
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };
  return (
    <>
      <HomeBanner>
        <div>환영합니다</div>
      </HomeBanner>
      <HomeSearch>
        <h2>Find your movies!</h2>
        <SearchBox>
          <Search
            onChange={(e) => {
              setQuery(e.target.value);
              setLoading(0);
              setDis("none");
            }}
          />
          <IoSearch style={{ fontSize: "30px" }} />
        </SearchBox>
        {loading ? (
          <MoviesContainer dis={dis}>
            {movies.map((movie) => (
              <Card movie={movie} size={"40%"} key={movie.id} />
            ))}
          </MoviesContainer>
        ) : query ? (
          <LoadinContainer>
            <div>
              데이터를 받아오는 중입니다.
              <Spinner />
            </div>
          </LoadinContainer>
        ) : null}
      </HomeSearch>
    </>
  );
}

export default Home;
