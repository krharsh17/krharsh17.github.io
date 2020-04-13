import React from 'react';
import cup from './../assets/images/Skills/cup.svg';
import shield from './../assets/images/Skills/protect.svg';
import rocket from './../assets/images/Skills/rocket.svg';
import idea from './../assets/images/Skills/idea.svg';
import sites from './../assets/images/Skills/sites.svg';
import plane from './../assets/images/Skills/plane.svg';

const iconsMap = {
    Mentoring: shield,
    Talks: cup,
    Programming: sites,
    Ambassador: rocket,
    Innovation: idea,
    Designing: plane 
}

class Skills extends React.Component{
    render(){
        return(
            <div className="Skills">
                <div className="Skills-Header">My <b>Skills</b>  <span role="img" aria-label=":juggler:">🤹🏻</span></div>
                <div className="Skills-Subheader">These are some of the things that I'm good at :)</div>
                <div className="Skills-Container">
                    <Skill title={'Programming'} description={'I am a programmer in the day'}/>
                    <Skill title={'Designing'} description={'I am a designer at night'}/>
                    <Skill title={'Mentoring'} description={'I love mentoring young minds in the field of tech'}/>
                    <Skill title={'Talks'} description={'I love delivering talks and presentations'}/>
                    <Skill title={'Innovation'} description={'I love creating products that can solve real-life problems'}/>
                    <Skill title={'Ambassador'} description={'I excel at being a campus ambassador for a cause'}/>
                </div>
            </div>
        )
    }
}

class Skill extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title: props.title,
            description: props.description
        };
    }

    render(){
        return(
            <div className="Skill">
                <img className="Skill-Icon" src={iconsMap[this.state.title]} alt={this.state.title} />
                <div className="Skill-Title">{this.state.title}</div>
                <div className="Skill-Seperator"></div>
                <div className="Skill-Description">{this.state.description}</div>
            </div>
        );
    }
}

export default Skills;