import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";
import axios from 'axios';
import { useState, useEffect } from 'react';
let HomeBanner = styled.div`
  display : flex;
  color : black;
  background : DDDDDD;
  height : 30vh;
  justify-content : center;
  align-items : center;
  font-size : 30px;
  font-weight : 800;
`

let HomeSearch = styled.div`
  display : flex;
  color : white;
  background : black;
  height : 60vh;
  align-items : center;
  flex-direction : column;
  padding-top: 10%;
  font-size : 30px;
`

let SearchBox = styled.div`
    display : flex;
    font-size : 20px;
    align-items : center;
    justify-content : center;
    width : 50%
`
let Search = styled.input`
    width : 70%;
    height : 5vh;
    text-align: center;
    border-radius: 20px;
`

function Home(){
    const [movies, setMovies] = useState([]); 

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
              api_key: '5009ee1ef99802b8b3a1b0ccd69e274c', // 여기에 TMDB API 키를 입력하세요
              language: 'ko-KR', // 원하는 언어 설정
            },
          });
          setMovies(response.data.results); // 영화 데이터 상태 
          console.log(movies);
        } catch (error) {
          console.error('영화 데이터를 가져오는 데 실패했습니다.', error);
        }
      };
      fetchMovies();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    return(
        <>
        <HomeBanner>
            <div>환영합니다</div>
        </HomeBanner>
        <HomeSearch>
            <h2>Find your movies!</h2>
            <SearchBox>
                <Search/>
                <IoSearch style={{fontSize : '30px'}}/>
            </SearchBox>
        </HomeSearch>
        </>
        
    )
}

export default Home;