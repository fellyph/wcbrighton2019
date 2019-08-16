import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <wc-brighton title="This Components runs with React" imgSrc="https://fellyph.com.br/img/icon-512.png"></wc-brighton>
    </div>
  );
}

export default App;
