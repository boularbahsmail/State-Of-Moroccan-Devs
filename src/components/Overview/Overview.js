import React from 'react';

// Import css
import './css/overview.css';

const Overview = () => {
    return (
        <div className="overview" id="overview">
          <div className="overview1">
            <div className="divider"></div>
            <h1>1.Overview</h1>
            <p>
              Since its founding, developer circles Morocco community aims to be the place for Moroccan developers to learn new things, share knowledge and move the IT community forward. We were always thinking about how to best serve the community, and along the way, we needed to understand it.
            </p>

            <p>
              This year, we had our first "State of Dev Survey", centered around software developers in Morocco. Why? Because analytics doesn't give us all the needed feedback, so we built a survey. 49 questions grouped into 4 main areas: Education, Work, Tech and Community. Ultimately, we wanted to know how we can help and support each other, and overall, be able to better respond to developers’ evolving needs.
            </p>

            <p>
              Launching was strategic. What better time and place than an online tech conference? In October, BlaBlaConf 1.0 gathered thousands of viewers during 5 days. We believe this momentum was key to the survey.
            </p>

            <p>
              A month after that, a total of 2287 submissions were received. That's from Morocco only and it's close to the 2532 submissions from Stackoverflow's first survey back in 2011. This number only speaks volume about how vibrant our community is.
            </p>

            <p>
              Needless to say, with such tremendous success, we intend to make it a yearly event!
            </p>
            <h2>Key results</h2>
            <p>
              Average software developers from Morocco are young, highly educated, with 2 to 3 years of experience. They work on modern frontend and backend web stacks.
            </p>

            <p>
              They practice side-projects and continuous learning on a regular basis.
            </p>

            <p>
              Remote working has been a positive step in their career, as well as being part of a local community.
            </p>

            <h2>A word about methodology</h2>
            <p>
              As part of our core principles, all collected data is anonymized. Raw results are also available under the BY-NC-SA 2.0 license. Same thing for the website code, we put everything on DevC-Casa GitHub organization.
            </p>

            <p>
              It’s important to note that not all fields were mandatory, so the results and graphics may not reflect the respondents’ total number for every question.
            </p>

            <p>
              We want to thank all our amazing contributors and everyone who helped share the survey to get more submissions. We’re looking forward to your feedback and for you to share the results with your network.
            </p>
          </div>
          <div className="profile" id="profile">
            <div className="divider"></div>
            <h1>2.Profile</h1>
            <p>
              The objective of this first section is to get insights about the profile and the skills of the people working in Software Engineering in Morocco. The majority of the people that answered the survey are men. Also, the majority of the respondents are junior developers with less than 3 years of experience and most of them are living in Morocco with plans to work abroad in the next 2 years.
            </p>
            <h2>Gender</h2>
            <p>
              The first objective was to get the gender of the developers in the country. More than 80% of the people that filled this survey are men.
            </p>

            <h2>Age</h2>
            <p>
              The majority of the respondents are between 20 and 24, which represents either university graduates or junior developers. The second category of respondents were people between 25 and 29.
            </p>

            <h2>Location</h2>
            <p>
            87.9% of respondents currently live in Morocco. The rest are located in Europe or other countries.
            </p>

            <h2>Highest degree</h2>
            <p>
              More than half of the developers that answered this question have an equivalent of a Master's degree. The other represented category were people that took a 2-year training after their high school degree (BAC), while a few respondents hold a PhD.
            </p>

            <h2>Years coding professionally</h2>
            <p>
              The majority of the responses were from people that have been coding for less than a year. The second group of people are developers that have been coding for 1 to 3 years. Based on this data, we can assume that the majority of the people who answered this survey are therefore junior developers. However, it's important to note that seniority is not only based on the number of years of experience.
            </p>
          </div>
        </div>
    )
}

export default Overview
