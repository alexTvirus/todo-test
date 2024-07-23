
import { useEffect, useRef, useState } from 'react';
import './App.css';
import CountClass from './Components/ClassComponents';
import CountFunct from './Components/FunctionComponents';

function App() {
  const btnRef =  useRef(null)
  const [isCount, setIsCount] = useState(true)

  useEffect(()=>{
    console.dir(btnRef.current)
  },[])

  return (
    <div className="App">
        <button ref={btnRef} onClick={()=>{setIsCount(!isCount)}}>{isCount?"Tat ":"Bat "}</button>
        {
          isCount && 
          // <CountClass/>
          <CountFunct></CountFunct>
        }
    </div>
  );
}

export default App;
