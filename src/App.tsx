import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [count, setCount] = useState(1)

    const countInc=()=>{
        setCount(++count)
    }
    const countReset=()=>{
        setCount(0)
    }
  return (
      <div className="appContainer">
          <div className="app">
              <div className="display">
                  <h1 className={count===5 ? "max" : "normal"}>{count}</h1>
              </div>
              <div className="btnContainer">
          <button onClick={countInc} disabled={count===5} className={"btn"} >inc</button>
          <button onClick={countReset} disabled={count===0} className={"btn"}>reset</button>
              </div>
          </div>
      </div>
  );
}

export default App;

