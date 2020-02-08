import React from 'react';
import './App.css';
import InitialSetting from './Components/InitialSetting/index';
import Mypage from './Components/Mypage/index';
import Mypage1 from './Components/Mypage1/index';
import Feedback from './Components/Feedback/index';


function App() {
  return (
    <div className="App">
      <InitialSetting />
      <Mypage />
      <Mypage1 />
      <Feedback />

    </div>
  );
}

export default App;
