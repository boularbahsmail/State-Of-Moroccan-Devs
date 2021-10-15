import React from 'react';
import moroccanTarbouch from './images/Fez-Hat.png';
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
                <button>Read the report</button>
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img src={moroccanTarbouch} alt="Fez Hat" title="Fez Hat" />
            {/*<img src={smile} />*/}
          </div>
        </div>
    )
}

export default Hero
