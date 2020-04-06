import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Loader from './components/Loader';
import WIP from './components/WIP';
import Community from './components/Community';
import Footer from './components/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.loader = React.createRef();
  }

  componentDidMount(){
    this.loader.current.completeLoading();
  }

  render(){
    return (
      <div className="App">
        {/* <NavBar /> */}
        <div className="theme-light">
          <Home />
          <About />
          <WIP />
          <Community />
          <Footer />
        </div>
        <Loader ref={this.loader} />
      </div>
    );
  }
}

// function App() {
  
// }

export default App;
