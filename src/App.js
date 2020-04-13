import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Loader from './components/Loader';
import WIP from './components/WIP';
import Community from './components/Community';
import Footer from './components/Footer';
import Freelancer from './components/Freelancer';
import Skills from './components/Skills';

class App extends React.Component{
  constructor(props){
    super(props);
    this.contact = React.createRef();
    this.loader = React.createRef();
  }

  componentDidMount(){
    this.loader.current.completeLoading();
  }

  scrollToFooter = () => {
    ReactDOM.findDOMNode(this.contact.current).scrollIntoView({ behavior: 'smooth' });
  }

  render(){
    return (
      <div className="App">
        {/* <NavBar /> */}
        <div className="theme-light">
          <Home />
          <About />
          <Skills />
          <Freelancer target={this.scrollToFooter}/>
          <Community />
          <Footer ref={this.contact} />
        </div>
        <Loader ref={this.loader} />
      </div>
    );
  }

}

export default App;
