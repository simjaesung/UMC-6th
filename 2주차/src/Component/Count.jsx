import { useState } from 'react';

function Count() {
  let [cnt,setCnt] = useState(0);
  return (
    <div className="App">
      <h3>{cnt}</h3>
      <button onClick={()=>{
        console.log("increase가 클릭됨");
        setCnt(cnt + 1);
      }}>+1</button>
      <button onClick={()=>{
        console.log("decrease가 클릭됨");
        setCnt(cnt - 1);
      }}>-1</button>
    </div>
  );
}

export default Count;
