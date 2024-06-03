import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/MainPage";
import NowPlaying from "./page/NowPlayingPage";
import Popular from "./page/PopularPage";
import Toprater from "./page/TopraterPage";
import Upcoming from "./page/Upcoming";
import MoiveDetail from "./page/MovieDetail";
import NotFound from "./page/NotFound";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import Nav from "./component/Nav";
import { useMediaQuery, MediaQuery } from "react-responsive";
import MinNav from "./component/MinNav";

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="App" style={{ position: "static" }}>
      {isSmallScreen ? <MinNav /> : <Nav />}
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
