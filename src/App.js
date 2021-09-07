import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import './App.css';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />        
      </main>
    </div>
  );
}

export default App;
