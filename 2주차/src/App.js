import './App.css';
import { Routes, Route} from 'react-router-dom'
import Count from './Component/Count';
import Main from './Component/Main';
import Init from './Component/Init';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path="/count" element = {<Count/>}/>
        <Route path="/init" element = {<Init/>}/>
        <Route path="/todo" element = {<Todo/>}/> 
      </Routes>
    </div>
  );
}

export default App;
