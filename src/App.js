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
import firebase from './Firebase';
import OnImagesLoaded from 'react-on-images-loaded';

class App extends React.Component{
  constructor(props){
    super(props);
    this.contact = React.createRef();
    this.loader = React.createRef();
    firebase.analytics();
  }

  finishLoading(){
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
          <OnImagesLoaded
            onLoaded={this.finishLoading.bind(this)}
            onTimeout={this.finishLoading.bind(this)}
            timeout={7000}>
            <Home />
            <About />
            <Skills />
            <Freelancer target={this.scrollToFooter}/>
            <Community />
            <Footer ref={this.contact} />
          </OnImagesLoaded>
        </div>
        <Loader ref={this.loader} />
      </div>
    );
  }

}

export default App;
