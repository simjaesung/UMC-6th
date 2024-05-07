import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../component/Card";
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
  height: 100vh;
  align-items: center;
  flex-direction: column;
  padding-top: 10%;
  font-size: 30px;
`;

let SearchBox = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
let Search = styled.input`
  width: 70%;
  height: 5vh;
  text-align: center;
  border-radius: 20px;
`;

function Home() {
  const [movies, setMovies] = useState([]);
  let [keyWord, setKeyword] = useState("");

  const searchMovies = async (e) => {
    const apiKey = "5009ee1ef99802b8b3a1b0ccd69e274c";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyWord}`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (keyWord.trim()) {
      searchMovies();
    }
  }, [keyWord]);
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
              setKeyword(e.target.value);
            }}
          />
          <IoSearch style={{ fontSize: "30px" }} />
        </SearchBox>
        <ul>{keyWord ? movies.map((movie) => <Card movie={movie} />) : null}</ul>
      </HomeSearch>
    </>
  );
}

export default Home;
