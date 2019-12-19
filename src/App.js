import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';
import Lessons from './components/lessons/Lessons';
import Levels from './components/levels/Levels'

function App() {
  return (
    <div className="App">
   <Login></Login>
   <Landing></Landing>
   <Lessons></Lessons>
   <Levels></Levels>
    </div>
  );
}

export default App;
