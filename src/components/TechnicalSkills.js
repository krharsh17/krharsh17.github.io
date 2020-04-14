import React from 'react';
import { Row, Col, Container, Progress } from 'reactstrap';
import VizSensor from 'react-visibility-sensor';

class TechnicalSkills extends React.Component{
    render(){
        return(
            <div className="TechnicalSkills">
                <div className="TechnicalSkills-Header">My <b>Technical</b> Skills  <span role="img" aria-label=":tech:">👨‍💻</span></div>
                <div className="TechnicalSkills-Subheader">These are the tech that I love the most</div>
                <div className="TechnicalSkills-Row">
                    <div className="TechnicalSkills-Col">
                        <TechnicalSkill title='Android Application Development' value={85} />
                        <TechnicalSkill title='VCS with Git' value={90} />
                        <TechnicalSkill title='Firebase' value={85} />
                        <TechnicalSkill title='Google Cloud Platform' value={75} />
                        <TechnicalSkill title='Flutter' value={50} />
                    </div>
                    <div className="TechnicalSkills-Col">
                        <TechnicalSkill title='MongoDB' value={80} />
                        <TechnicalSkill title='ExpressJS' value={81} />
                        <TechnicalSkill title='ReactJS' value={85} />
                        <TechnicalSkill title='NodeJS' value={83} />
                        <TechnicalSkill title='Serverless Cloud Computing' value={90} />
                    </div>
                </div>
            </div>
        );
    }
}

class TechnicalSkill extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            value: props.value,
            filled: 0
        }
    }

    render(){
        return(
            <div className="TechnicalSkill">
                <div>{this.state.title}</div>
                <VizSensor onChange={(isVisible) => {
                    if(isVisible){
                        this.setState({filled: this.state.value});
                    } else {
                        this.setState({filled: 0})
                    }
                }}>
                    <Progress striped value={this.state.filled} max={100} className="TechnicalSkill-Bar-BG" barClassName="TechnicalSkill-Bar" />
                </VizSensor>
            </div>
        );
    }
}

export default TechnicalSkills;