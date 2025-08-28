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
        <h1>Background</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Consultant, Lloyds Banking Group</h3>
            <p>
              <li>
                Collaborated with Lloyds for an MSc project in developing a Bayesian neural network for anomaly detection
              </li>
              <li>
                Conducted comprehensive data exploration using advanced visualisations with Matplotlib and seaborn
              </li>
              <li>
                Produced interpretable and validated results incorporating both aleatoric & epistemic uncertainty
              </li>
              <li>
                Proposed model achieved an F1 score of 0.94 compared to PCA (0.88), EE (0.79), and IF (0.73)              

              </li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Jul 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >           
            <h3 className="vertical-timeline-element-title">Data Science Consultant, Simon-Kucher</h3>
            <p>
              <li>
                Collaborated with Simon-Kucher for an MSc project in developing a spatial pricing model using R-INLA
              </li>
              <li>
                Performed extensive preprocessing and exploratory data analysis (EDA) with insightful plots using ggplot2
              </li>
              <li>
                Results showed reductions of approximately 10% in MAE compared to a baseline linear regression model
              </li>
              <li>
                Produced a high-quality report (83% grade) for the client, outlining statistical results and recommendations
              </li>
            </p>
          </VerticalTimelineElement>
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
                Achieved a Distinction in taught modules (average: 79%) with the second research project ongoing
              </li>
              <li>
                Modules included: Bayesian Data Analysis (87%), Biostatistics, Extended Statistical Programming (81%), Generalised Regression Models (85%), Incomplete Data Analysis, and Machine Learning in Python
              </li>
              <li>
                Awarded the School of Mathematics Master’s Scholarship (£7,600) based on academic merit
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
                Designed and implemented tailored lessons for 20+ students per week, for students up to undergraduate level
              </li>
              <li>
                Demonstrated patience and strong communication skills with over 500 hours of tutoring
              </li>
              <li>
                Consistently rated highly with six 5-star <a href="https://tutorful.co.uk/tutors/54ol5eyq">reviews</a>, with one student achieving 99% in their final Physics exam   
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
                  Modules included: Atmospheric and Planetary Physics (96%, top mark in cohort), Solid State Physics (89%), Functional Medical Imaging (88%), Probability (85%), and Linear Mathematics (83%)                 </li> 
                <li>
                  Awarded the Sir Peter Mansfield High-Achiever Scholarship and First Year Achievement Scholarship at the University of Nottingham for high achievement in A Levels and in the first year
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