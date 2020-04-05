import React from 'react';
import theme from '../assets/scss/themes.scss'
import ClockLoader from "react-spinners/ClockLoader";
 
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.clockLoader = React.createRef();
    this.state = {
      loading: true
    };
    document.body.style.overflowY = "hidden";
  }

  completeLoading() {
      this.setState({
          loading: false,
          style: {
            animation: "fade 0.4s linear 0.5s 1 normal forwards"
          }
        }
      );
  }
 
  render() {
    if(!this.state.loading) {
        document.body.style.overflowY = "scroll";
    }
    return (
      <div className="loader" style={this.state.style}>
        <ClockLoader
          size={150}
          color={theme.colorDark}
          loading={true}
        />
      </div>
    );
  }
}

export default Loader;