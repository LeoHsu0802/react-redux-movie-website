import React from 'react';
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Comingsoon from './components/Body/Comingsoom'
import './App.css';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <Header />
      <Comingsoon />
    </div>
  );
}

export default App;
