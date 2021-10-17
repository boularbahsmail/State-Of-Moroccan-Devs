import React, { useState } from 'react';

// Import css
import './css/header.css';

const Header = () => {
  const brandName = "<StateOfDev />";
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  // Close NavBar event
  const closeIt = () => {
    let nav = document.querySelector(".nav");
    let bars = document.querySelector(".bars");

    if (isHamMenuOpen) {
      nav.classList.remove("open");
      bars.classList.remove("open");
      bars.click();
    } else {
      nav.classList.toggle("open");
      bars.classList.toggle("open");
    }
  }
    return (
        <div className="header">
          <header>
            <h2>
              <a href="">{brandName}</a>
            </h2>

            <div className={`bars ${isHamMenuOpen ? "open" : ""}`} onClick={() => setIsHamMenuOpen(!isHamMenuOpen)} title="Menu">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={`nav ${isHamMenuOpen ? "open" : ""}`}>
            <h2>
              <a href="">{brandName}</a>
            </h2>
              <a href="#overview" title="Overview" onClick={closeIt}>
                Overview
              </a>
              <a href="#profile" title="Profile" onClick={closeIt}>
                Profile
              </a>
              <a href="#tracks" title="Tracks" onClick={closeIt}>
                Tracks
              </a>
              <a href="#faq" title="FAQ" onClick={closeIt}>
                FAQ
              </a>
            </div>
          </header>
        </div>
    )
}

export default Header
