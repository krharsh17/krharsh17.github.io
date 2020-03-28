import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import WIP from './components/WIP';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <div className="theme-light">
        <Home />
        <About />
        <WIP />
      </div>
    </div>
  );
}

export default App;
