import React from 'react';
import './App.css';
import Wether from './container/wether top/weather-top';
import BottomDaily from './container/bottom/bottomDaly/BottomDaily';
import BottomMiddle from './container/bottom/bottomMiddle/BottomMiddle';

function App() {
   
  return (
    <div className="cover">
      <Wether className="cover_main"/>
      <BottomDaily />
      <BottomMiddle  className="cover_other"/>
      
    </div>
  );
}

export default App;
