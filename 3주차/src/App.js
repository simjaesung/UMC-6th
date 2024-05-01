import styled from 'styled-components'
import './App.css';
import {Routes, Route, useNavigate } from 'react-router-dom';
import Home from './page/MainPage';
import NowPlaying from './page/NowPlayingPage';
import Popular from './page/PopularPage';
import Toprater from './page/TopraterPage';
import Upcoming from './page/Upcoming';
import 'bootstrap/dist/css/bootstrap.min.css';

let Navbar = styled.div`
  display : flex;
  color : white;
  background : black;
  justify-content : space-around;
  align-items : center;
  height : 10vh;
  font-size : 17px;
`
let NavLink = styled.div`
  &:hover {
    font-size : 120%;
    transition: 0.5s;
    cursor:pointer;
    color : yellow;
  }
`
function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      
      <Navbar className='nav'>
        <NavLink style={{width : '30%', fontSize : '25px'}}
        onClick={()=>{navigate('/')}}>UMC Movie</NavLink>
        <NavLink>로그인</NavLink>
        <NavLink onClick={()=>{navigate('popular')}}>Popular</NavLink>
        <NavLink onClick={()=>{navigate('nowplaying')}}>Now Playing</NavLink>
        <NavLink onClick={()=>{navigate('toprater')}}>Top Rated</NavLink>
        <NavLink onClick={()=>{navigate('upcoming')}}>Upcoming</NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/nowplaying" element={<NowPlaying/>}/>
        <Route path="/toprater" element={<Toprater/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
      </Routes>
    </div>
  );
}

export default App;
