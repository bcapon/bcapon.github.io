import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2024 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">MSc Statistics with Data Science, University of Edinburgh</h3>
            <p>
              <li>
                Modules include: Bayesian Theory, Bayesian Data Analysis, Biostatistics, Extended Statistical Programming (81%, provisional), Generalised Regression Models, Machine Learning in Python, and Statistical Research Skills
              </li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2023 - Sep 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mathematics, Physics, and Python Tutor</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4> */}           
            <p>
              <li>
                Designed and implemented tailored lessons for 20+ students per week, supporting students ranging from GCSE to early undergraduate level
              </li>
              <li>
                Demonstrated patience and strong communication skills with over 500 hours of tutoring on Tutorful
              </li>
              <li>
                Achieved six 5-star <a href="https://tutorful.co.uk/tutors/54ol5eyq">reviews</a>, with one student achieving 99% in their final Physics exam          
              </li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2020 - July 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">BSc (Hons) Mathematical Physics (First Class), University of Nottingham</h3>
            <p>
                <li>
                  Modules included: Atmospheric and Planetary Physics (96%, the highest mark), Solid State Physics (89%), Functional Medical Imaging (88%), Probability (85%), and Linear Mathematics (83%)
                </li> 
                <li>
                  Achieved top of class in the final year with an average of 80%
                </li> 
                <li>
                  Class representative for Mathematical Physics during the first year
                </li>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;