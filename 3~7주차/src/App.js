import styled from "styled-components";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./page/MainPage";
import NowPlaying from "./page/NowPlayingPage";
import Popular from "./page/PopularPage";
import Toprater from "./page/TopraterPage";
import Upcoming from "./page/Upcoming";
import MoiveDetail from "./page/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import NotFound from "./page/NotFound";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import { useCookies } from "react-cookie";

let Navbar = styled.div`
  display: flex;
  color: white;
  background: black;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  font-size: 100%;
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
  let [sign, setSign] = useState(1);
  let [login, setLogin] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  let isCookies = cookies["connect.sid"];
  console.log(isCookies);
  useEffect(() => {
    //쿠키가 존재하는 경우 nav의 로그인 -> 로그아웃, 회원가입을 가림
    if (isCookies) {
      setLogin(1);
      setSign(0);
    } else {
      setLogin(0);
      setSign(1);
    }
  }, [isCookies]);

  return (
    <div className="App">
      <Navbar className="nav">
        <NavLink
          style={{ width: "30%", fontSize: "25px" }}
          onClick={() => {
            navigate("/");
          }}>
          UMC Movie
        </NavLink>
        {login ? (
          <NavLink
            onClick={() => {
              removeCookie("connect.sid");
              setLogin(0);
            }}>
            로그아웃
          </NavLink>
        ) : (
          <NavLink
            onClick={() => {
              navigate("/login");
            }}>
            로그인
          </NavLink>
        )}
        {sign ? (
          <NavLink
            onClick={() => {
              navigate("/signup");
            }}>
            회원가입
          </NavLink>
        ) : null}
        <NavLink
          onClick={() => {
            navigate("/popular/1");
          }}>
          Popular
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("/nowplaying");
          }}>
          Now Playing
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("/toprater");
          }}>
          Top Rated
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("/upcoming");
          }}>
          Upcoming
        </NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular/:page" element={<Popular />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/toprater" element={<Toprater />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movies/:id" element={<MoiveDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
