import React from 'react';
import background from '../assets/images/main-bg.svg';
import icon from '../assets/images/ic-resume.svg';
import Typical from 'react-typical';

const bio = [
    'I am a mobile developer.', 1000,
    'I am an AWS Educate Student Ambassador.', 1000,
    'I am a student.', 1000,
    'I am a MERN Stack developer.', 1000,
    'I am a gamer.', 1000,
    'I am a UI designer.', 1000,
    'I am a mentor.', 1000,
    'I am an open source fanatic.', 1000,
    'I am a javaphile.', 1000,
    'I am a data science enthusiast.', 1000,
    'I am a dog lover.', 1000,
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
                window.open('https://drive.google.com/file/d/1fdfYbLBzPXN2dL7slD5ZWQJEnZ2spq6_/view');
            }}>
                View My Resume
                <img src={icon} alt='Go' className="ic-resume" onContextMenu={(e) => {
                    e.preventDefault()
                }} />
            </div>
        </div>
    );
}

export default Home;