import styled from "styled-components";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FiAlignJustify } from "react-icons/fi";

let Navbar = styled.div`
  display: flex;
  color: white;
  background: black;
  justify-content: ${(props) => props.bg};
  text-align: center;
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

export default function Nav() {
  let navigate = useNavigate();
  let [sign, setSign] = useState(1);
  let [login, setLogin] = useState(0);
  let [sidebar, setSidebar] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  let isCookies = cookies["connect.sid"];

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
    <Navbar className="nav" bg="space-around">
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
  );
}
