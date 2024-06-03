import styled from "styled-components";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";

let Navbar = styled.div`
  display: flex;
  color: white;
  background: black;
  justify-content: space-between;
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

let Sidebar = styled.div`
  width: 60%;
  height: 100%;
  position: fixed;
  color: black;
  top: 0;
  right: 0;
  background-color: #f4f4f4;
  opacity: 0.9;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`;

let SideNavLink = styled.div`
  font-size: 150%;
  margin-bottom: 20px;
  margin-top: 20px;
  &:hover {
    font-size: 120%;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export default function Nav() {
  let navigate = useNavigate();
  let [sign, setSign] = useState(1);
  let [login, setLogin] = useState(0);
  let [sidebar, setSidebar] = useState(false);
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
    <div>
      <Navbar className="nav">
        <NavLink
          style={{ width: "30%", fontSize: "25px" }}
          onClick={() => {
            setSidebar(false);
            navigate("/");
          }}>
          UMC Movie
        </NavLink>
        <NavLink style={{ marginRight: "5%", fontSize: "30px" }}>
          <FiAlignJustify
            onClick={() => {
              setSidebar(true);
            }}
          />
        </NavLink>

        <Sidebar isOpen={sidebar}>
          {login ? (
            <SideNavLink
              onClick={() => {
                removeCookie("connect.sid");
                setLogin(0);
                setSidebar(false);
              }}>
              로그아웃
            </SideNavLink>
          ) : (
            <SideNavLink
              onClick={() => {
                navigate("/login");
                setSidebar(false);
              }}>
              로그인
            </SideNavLink>
          )}
          {sign ? (
            <SideNavLink
              onClick={() => {
                navigate("/signup");
                setSidebar(false);
              }}>
              회원가입
            </SideNavLink>
          ) : null}
          <SideNavLink
            onClick={() => {
              navigate("/popular/1");
              setSidebar(false);
            }}>
            Popular
          </SideNavLink>
          <SideNavLink
            onClick={() => {
              navigate("/nowplaying");
              setSidebar(false);
            }}>
            Now Playing
          </SideNavLink>
          <SideNavLink
            onClick={() => {
              navigate("/toprater");
              setSidebar(false);
            }}>
            Top Rated
          </SideNavLink>
          <SideNavLink
            onClick={() => {
              navigate("/upcoming");
              setSidebar(false);
            }}>
            Upcoming
          </SideNavLink>
        </Sidebar>
      </Navbar>
    </div>
  );
}
