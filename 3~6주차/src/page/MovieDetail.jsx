import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
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

let CastCrewBox = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  height: 100%;
  gap: 20px;
  background: black;
`;

let CastCrewImgBox = styled.div`
  height: 80%;
  border-radius: 20px;
  img {
    border-radius: 50%;
  }
`;

let CastCrewNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 20%;
`;

function MoiveDetail() {
  let { id } = useParams();
  console.log(id);
  const { state } = useLocation();
  let tmp = Math.floor(state.vote_average);
  let [cast, setCast] = useState([]); //출연진
  let [crew, setCrew] = useState([]); //제작진
  const averStar = (val) => {
    return "⭐️".repeat(val);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "5009ee1ef99802b8b3a1b0ccd69e274c";
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
        const response = await axios.get(url);
        setCast(response.data.cast);
        setCrew(response.data.crew);
        console.log(response.data);
      } catch (error) {
        console.error("영화 데이터를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchMovies();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
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
      <CastCrewBox>
        {cast.map(function (p, i) {
          return (
            <div>
              <CastCrewImgBox>
                {p.profile_path != null ? (
                  <img src={"https://image.tmdb.org/t/p/w500" + p.profile_path} />
                ) : (
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"} />
                )}
              </CastCrewImgBox>
              <CastCrewNameBox>
                <div>{p.name}</div>
              </CastCrewNameBox>
            </div>
          );
        })}
        {crew.map(function (p, i) {
          return (
            <div>
              <CastCrewImgBox>
                {p.profile_path != null ? (
                  <img src={"https://image.tmdb.org/t/p/w500" + p.profile_path} />
                ) : (
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"} />
                )}
              </CastCrewImgBox>
              <CastCrewNameBox>
                <div>{p.name}</div>
              </CastCrewNameBox>
            </div>
          );
        })}
      </CastCrewBox>
    </>
  );
}

export default MoiveDetail;
