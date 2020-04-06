/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Player, ControlBar, VolumeMenuButton } from 'video-react';
import ml1 from '../assets/images/community/ml1.jpg';
import ml2 from '../assets/images/community/ml2.jpg';
import test1 from '../assets/images/community/test1.jpg';
import and1 from '../assets/images/community/and1.mp4';
import and2 from '../assets/images/community/and2.jpg';
import git1 from '../assets/images/community/git1.jpg';
import git2 from '../assets/images/community/git2.jpg';
import git3 from '../assets/images/community/git3.jpg';
import git4 from '../assets/images/community/git4.jpg';
import git5 from '../assets/images/community/git5.mp4';
import git6 from '../assets/images/community/git6.jpg';
import git7 from '../assets/images/community/git7.jpg';

class Community extends React.Component {

    render(){
        return(
            <div className="Community">
                <div className='Community-Header'>I love building the <b>Community</b> ❤️</div>
                <Carousel className="Community-Carousel" 
                    transitionTime={1000} 
                    infiniteLoop={true} 
                    interval={4000} 
                    showThumbs={true} 
                    autoPlay={true} 
                    showArrows={true} 
                    showIndicators={false} 
                    showStatus={false} 
                    width='70vw'>
                    <div className="Carousel-Element">
                        <img src={ml2} alt="ML Workshop" />
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/124408002251647'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Machine Learning Workshop by Coding Blocks</p>
                        </a>
                    </div>

                    <div className="Carousel-Element">
                        <img src={ml1} alt="ML Workshop" />
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/124408002251647'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Machine Learning Workshop by Coding Blocks</p>
                        </a>
                    </div>

                    <div className="Carousel-Element">
                        <img src={test1} alt="Aptitude Test" />
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/127686921923755'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Aptitude & Coding Competition</p>
                        </a>
                    </div>

                    <div className="Carousel-Element">
                        <Player
                            muted={true}
                            playInline={true}
                            autoPlay={true}
                            fluid={false}
                            height={'100%'}>
                            <source src={and1} />
                            <ControlBar autoHide={true}>
                                <VolumeMenuButton />
                            </ControlBar>
                        </Player>
                        <p className="Carousel-Element-Title">Android & Firebase classes</p>
                        <img src={and2} alt="Android Classes" />
                    </div>

                    <div className="Carousel-Element">
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/189133449112435'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Git & GitHub Workshop</p>
                        </a>
                        <img src={git1} alt="Git Workshop" />
                    </div>

                    <div className="Carousel-Element">
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/189133449112435'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Git & GitHub Workshop</p>
                        </a>
                        <img src={git2} alt="Git Workshop" />
                    </div>

                    <div className="Carousel-Element">
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/189133449112435'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Git & GitHub Workshop</p>
                        </a>
                        <img src={git3} alt="Git Workshop" />
                    </div>

                    <div className="Carousel-Element">
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/189133449112435'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Git & GitHub Workshop</p>
                        </a>
                        <img src={git4} alt="Git Workshop" />
                    </div>

                    <div className="Carousel-Element">
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/189133449112435'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Git & GitHub Workshop</p>
                        </a>
                        <Player
                            muted={true}
                            playInline={true}
                            autoPlay={true}
                            fluid={false}
                            height={'100%'}>
                            <source src={git5} />
                            <ControlBar autoHide={true}>
                                <VolumeMenuButton />
                            </ControlBar>
                        </Player>
                        <img src={git7} alt="Git Workshop" />
                    </div>

                    <div className="Carousel-Element">
                        <a href={'https://www.facebook.com/hackSlash.nitp/posts/189133449112435'} target={'_blank'}>
                            <p className="Carousel-Element-Title">Git & GitHub Workshop</p>
                        </a>
                        <img src={git6} alt="Git Workshop" />
                    </div>
                </Carousel>

            </div>
        );
    }

}

export default Community;