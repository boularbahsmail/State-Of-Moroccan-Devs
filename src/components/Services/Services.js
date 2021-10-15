import React from 'react';
import moroccanTarbouch from './images/Fez-Hat.png';

// Import css
import './css/services.css';

const Services = () => {
    return (
        <div className="services">
          <div className="cards">
            <div className="card">
              <img src={moroccanTarbouch} />
              <p>
                Play with survey results using online playground
              </p>
              <button>Open results playground</button>
            </div>

            <div className="card">
              <img src={moroccanTarbouch} />
              <p>
                Interested to go further with the survey results?
              </p>
              <button>Download raw results</button>
            </div>

            <div className="card">
              <img src={moroccanTarbouch} />
              <p>
                Share your perspective about the results
              </p>
              <button>Write an article</button>
            </div>
          </div>
        </div>
    )
}

export default Services
