import React from 'react';
import theme from '../assets/scss/themes.scss';

class PageProgress extends React.Component{
    render(){
        console.log(this.props.scroll);
        return(
            <div className="PageProgress" style={{
                width: '100%', 
                position: 'fixed', 
                height: '3px', 
                zIndex: 1,
                top: '0'}}>
                <div className="PageProgressBar" style={{
                    width: this.props.scroll,
                    backgroundColor: theme.colorPrimary,
                    height: '3px',
                    borderRadius: '8px'
                    }}></div>
            </div>
        );
    }
}

export default PageProgress;