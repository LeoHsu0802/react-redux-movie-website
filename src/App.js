import React from 'react';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import LeftMenu from './components/LeftMenu/LeftMenu'
import './App.css';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <Header />
      <Body />
    </div>
  );
}

export default App;
