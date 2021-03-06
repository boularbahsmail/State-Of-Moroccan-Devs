import React from 'react';
import kids from './images/boyandgirl.png';
import smile from './images/smile.png';

// Import css
import './css/hero.css';

const Hero = () => {
    return (
        <div className="hero">
          <div className="hero-text">
            <h1>State Of Dev In Morocco 2020</h1>
            <p>
              In November 2020, 2287 developers from Morocco 🇲🇦 told us about their jobs satisfaction, salaries, and community contribution, how they learn and level up, which tools they’re using, and what they want to learn next.
            </p>
            <div className="buttons">
              <a href="#overview">
                <button title="Overview">Read the report</button>
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img src={kids} alt="Mgharba" title="Boy & Girl" />
            {/*<img src={smile} />*/}
          </div>
        </div>
    )
}

export default Hero
