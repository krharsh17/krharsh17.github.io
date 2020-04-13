/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import fb from '../assets/images/footer/fb.svg';
import email from '../assets/images/footer/email.svg';
import github from '../assets/images/footer/github.svg';
import linkedin from '../assets/images/footer/linkedin.svg';
import insta from '../assets/images/footer/insta.svg';
import medium from '../assets/images/footer/medium.svg';
import twitter from '../assets/images/footer/twitter.svg';

class Footer extends React.Component {
    render(){
        return(
            <div className="Footer">
                <b>Connect</b> with me on
                <div className="Links">
                    <a href="mailto:kharsh39@gmail.com"><img src={email} className='Link' alt='Email'/></a> 
                    <a href="https://facebook.com/krharsh17"><img src={fb} className='Link' alt='Facebook'/></a> 
                    <a href="https://twitter.com/krharsh17"><img src={twitter} className='Link' alt='Twitter'/></a> 
                    <a href="https://linkedin.com/in/krharsh17"><img src={linkedin} className='Link' alt='LinkedIn'/></a> 
                    <a href="https://medium.com/@krharsh17"><img src={medium} className='Link' alt='Medium'/></a> 
                    <a href="https://instagram.com/krharsh17"><img src={insta} className='Link' alt='Instagram'/></a> 
                    <a href="https://github.com/krharsh17"><img src={github} className='Link' alt='GitHub'/></a> 
                </div>
                <div className='Copyright'>Made with ❤️ on GitHub | © 2020 Kumar Harsh</div>
            </div>
        );
    }
}

export default Footer;