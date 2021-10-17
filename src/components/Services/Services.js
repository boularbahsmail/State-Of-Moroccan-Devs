import React from 'react';
import moroccanTarbouch from './images/Fez-Hat.png';
import webAndMobileUi from './images/webmobileui.png';
import backendTechs from './images/backendTechs.png';
import securityArch from './images/securityArch.png';
import bigdataAndMachineLearning from './images/bigdataAndMachineLearning.png';
import cloudAndContainers from './images/cloudAndContainers.png';
import softskills from './images/softskills.png';


// Import css
import './css/services.css';

const Services = () => {
    return (
        <div className="services" id="tracks">
        <div className="divider"></div>
        <h1>3.Tracks</h1>
        <p>
          6 Tracks covering everything you need to sharpen your IT skills. 1 additional track because excellence is not only about code!
        </p>
          <div className="cards">
            <div className="card">
              <img src={webAndMobileUi} />
              <h2>Web, Mobile and UX</h2>
              <p>
                Frontend technologies, languages, and tools to build modern browser and mobile apps.
              </p>
            </div>

            <div className="card">
              <img src={backendTechs} />
              <h2>Backend Technologies & Programming languages</h2>
              <p>
                All about programming languages, functional, reactive, emerging languages, tools, libraries, etc
              </p>
            </div>

            <div className="card">
              <img src={securityArch} />
              <h2>Security and Architecture</h2>
              <p>
                How-Tos, strategies, tools, techniques, and best practices for getting architecture and security right.
              </p>
            </div>

            <div className="card">
              <img src={bigdataAndMachineLearning} />
              <h2>Big Data & Machine Learning</h2>
              <p>
                Big Data, Fast Data, NoSQL, Machine learning, Deep Learning, Neural Networks, TensorFlow, etc
              </p>
            </div>

            <div className="card">
              <img src={cloudAndContainers} />
              <h2>Cloud, Containers & Infrastructure</h2>
              <p>
                Serverless, Docker, Kubernetes, Service Mesh, Cloud, PaaS, and anything in between.
              </p>
            </div>

            <div className="card">
              <img src={softskills} />
              <h2>Soft Skills</h2>
              <p>
                Emotional Intelligence, Critical Thinking, Evaluation, Mindfulness, Leadership...
              </p>
            </div>

          </div>
          <div className="questions" id="faq">
          <div className="divider"></div>
            <h1>4.Most commonly asked questions</h1>
            <br />
            <div className="details">
              <details className="detail-item">
                <summary>
                  <span>What is Blablaconf?</span>
                  <b className="openDetail"></b>
                </summary>
                <p>
                  BlablaConf is a community driven online conference, made by developers for developers. Blabla contains 5 tracks in 5 days, we discuss all the web related topics, from Web & UI/UX, Big Data & ML, Cloud, Security, Backend technologies, to Soft skills, with our speakers from different backgrounds and completely in our Moroccan Darija.
                </p>
              </details>

              <details id="detail-item">
                <summary>
                <span>How much does BlablaConf cost?</span>
                <b className="openDetail"></b>
                </summary>
                <p>
                  BlablaConf is 100% FREE.
                  BlablaConf is bringing together a truly  speakers lineup to help each other find out more about different topics.  The caliber of speakers in Blabla could be seen in events costing thousands of MAD in Morocco and abroad.  As sharing is caring, we want this content to be accessible for everyone, for FREE.
                </p>
              </details>

              <details className="detail-item">
                <summary>
                <span>Will the talks be recorded?</span>
                <b className="openDetail"></b>
                </summary>
                <p>
                  A recording of the entire tracks and each session will be available after the end of the conference.
                </p>
              </details>

              <details className="detail-item">
                <summary>
                <span>How can I register to BlablaConf?</span>
                <b className="openDetail"></b>
                </summary>
                <p>
                  Registration for BlablaConf are open until the start of the conference, on October 25th, Grab you ticket.
                </p>
              </details>

              <details className="detail-item">
                <summary>
                <span>Where can I watch the sessions?</span>
                <b className="openDetail"></b>
                </summary>
                <p>
                  Via Geeksblala's Youtube channel,  We will provide viewing details to all registrants prior to the event.
                </p>
              </details>

            </div>
          </div>
        </div>
    )
}

export default Services
