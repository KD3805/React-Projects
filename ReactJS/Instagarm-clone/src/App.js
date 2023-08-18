import './App.css';
import { Feeds } from './Main';
import Navicons from './Nav-icons';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.getElementById('mode').className = "fa-solid fa-sun mode";
      document.getElementById('mode').style.color = "white";
      document.body.style.backgroundColor = 'rgb(3, 1, 10)';
    }
    else{
      setMode('white');
      document.getElementById('mode').className = "fa-solid fa-moon mode";
      document.getElementById('mode').style.color = "black";
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navicons mode={mode} toggleMode={toggleMode}/>
      
      <Feeds mode={mode} toggleMode={toggleMode}/>

      <Sidebar mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
