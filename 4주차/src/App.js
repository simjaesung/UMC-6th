import styled from "styled-components";
import "./App.css";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./page/MainPage";
import NowPlaying from "./page/NowPlayingPage";
import Popular from "./page/PopularPage";
import Toprater from "./page/TopraterPage";
import Upcoming from "./page/Upcoming";
import MoiveDetail from "./page/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import NotFound from "./page/NotFound";

let Navbar = styled.div`
  display: flex;
  color: white;
  background: black;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  font-size: 20px;
`;
let NavLink = styled.div`
  &:hover {
    font-size: 120%;
    transition: 0.5s;
    cursor: pointer;
    color: yellow;
  }
`;
function App() {
  let navigate = useNavigate();
  let [login, setLogin] = useState("로그인");
  return (
    <div className="App">
      <Navbar className="nav">
        <NavLink
          style={{width: "30%", fontSize: "25px"}}
          onClick={() => {
            navigate("/");
          }}>
          UMC Movie
        </NavLink>
        <NavLink
          onClick={() => {
            if (login === "로그인") setLogin("로그아웃");
            else setLogin("로그인");
          }}>
          {login}
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("popular");
          }}>
          Popular
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("nowplaying");
          }}>
          Now Playing
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("toprater");
          }}>
          Top Rated
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("upcoming");
          }}>
          Upcoming
        </NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/toprater" element={<Toprater />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movies/:name" element={<MoiveDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
