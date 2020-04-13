import React from 'react';

const Freelancer = (props) => {
    return(
        <div className="Freelancer-Stripe">

            <span>I am available for freelancing <span role="img" aria-label="Coder">👋</span></span>

            <button className="Hire-Me-Btn" onClick={props.target}>Hire Me!</button>

        </div>
    );
}

export default Freelancer;