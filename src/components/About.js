import React from 'react';

const bio=' \n\n';

const About = () => {
    return(
        <div className='About'>
            <div className='About-Container'>
                <div className='Col-1'> 
                <img className='Profile-Photo' alt='Profile' src='https://avatars0.githubusercontent.com/u/46624829?s=400&u=387daf3f9715ebca5467a76694b28fa7e01a8b66&v=4' />
                </div>
                <div className='Col-2'>
                    <div className='About-Me-1'><b>About</b> Me</div>
                    <div className='About-Me-2'>Hello! <span className='Name'>I'm <b>Kumar Harsh</b></span></div>
                    <div className='About-Me-3'>
                        <p>
                        I’m a second-year student at NIT, Patna pursuing B.Tech in Computer Science and Engineering.
                        </p>
                        <p>
                        Being a tech-enthusiast, I love to explore new technologies and leverage them to solve real-life problems. I am a detail-oriented developer with diverse experience in developing web applications, hybrid & native mobile apps and cloud computing solutions.
                        </p>
                        <p>
                        I am a campus leader at HackSlash and I’m driven by the will to create an impact and encourage diversity in communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;