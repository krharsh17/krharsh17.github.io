import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Loader from './components/Loader';
import Community from './components/Community';
import Footer from './components/Footer';
import Freelancer from './components/Freelancer';
import Skills from './components/Skills';
import TechnicalSkills from './components/TechnicalSkills';
import OnImagesLoaded from 'react-on-images-loaded';
import PageProgress from './components/PageProgress';
import {initFirebase} from "./components/initFirebase";

class App extends React.Component{
  constructor(props){
    initFirebase().then(firebase => {
      console.log(firebase)
      firebase.analytics()
    })

    super(props);
    this.contact = React.createRef();
    this.loader = React.createRef();
    this.app = React.createRef();
    this.state={
      scroll: '0%'
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  finishLoading(){
    this.loader.current.completeLoading();
  }

  scrollToFooter = () => {
    ReactDOM.findDOMNode(this.contact.current).scrollIntoView({ behavior: 'smooth' });
  }

  handleScroll(event){
    var scrollPercent = (window.scrollY * 100 / (this.app.current.offsetHeight - window.innerHeight));
    this.setState({scroll: scrollPercent + '%'});
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <div className="App" ref={this.app}>
        <PageProgress scroll={this.state.scroll} />
        {/* <Navig /> */}
        <div className="theme-light">
          <OnImagesLoaded
            onLoaded={this.finishLoading.bind(this)}
            onTimeout={this.finishLoading.bind(this)}
            timeout={7000}>
            <Home />
            <About />
            <Skills />
            <TechnicalSkills />
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
