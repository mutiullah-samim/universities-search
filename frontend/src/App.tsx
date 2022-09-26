import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Universities from './components/universities/Index';

function App() {

  return <>
    <Header />
    <main className="main-section">
      <Universities />
    </main>
  </>;

}

export default App;
