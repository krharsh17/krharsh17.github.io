import React from 'react';
import background from '../assets/images/main-bg.svg';
import icon from '../assets/images/ic-resume.svg';
import Typical from 'react-typical';

const bio = [
    'I am an android developer', 1000,
    'I am a student', 1000,
    'I am a MERN Stack developer', 1000,
    'I am a gamer', 1000,
    'I am a UI designer', 1000,
    'I am a mentor', 1000,
    'I am an open source fanatic', 1000,
    'I am a javaphile', 1000,
    'I am a data science enthusiast', 1000,
    'I am a dog lover', 1000,
]

const Home = () => {
    return(
        <div className="Home">
            <img src={background} alt='Oops, something went wrong!' className="main-bg" />
            <div className="Intro-text">
                <div className="Hello">Hello!</div>
                <div className="Intro">I am <br /> Kumar Harsh</div>
                <Typical
                    steps={bio}
                    loop={Infinity}
                    wrapper="p"
                    className='bio'
                />
            </div>

            <div className='cv-button' onClick={() => {
                window.open('https://drive.google.com/open?id=1NC3cLCaLZ_m-lKh6DsHhFFtkrVO7Xm_L');
            }}>
                View My Resume
                <img src={icon} alt='Go' className="ic-resume" />
            </div>
        </div>
    );
}

export default Home;