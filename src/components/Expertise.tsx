import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import {faLineChart, faDatabase} from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "R",
    "SQL",
    "PostgreSQL",
    "NumPy",
    "stan", 
    "rjags",
    "R-INLA",
    "inlabru"
];

const labelsSecond = [
    "Python",
    "NumPy",  
    "SciPy",
    "pandas",
    "scikit-learn", 
    "TensorFlow",
    "Git",
];

const labelsThird = [
    "matplotlib",
    "seaborn", 
    "ggplot2", 
    "RMarkdown", 
    "Jupyter Notebook",
    "Tableau", 
    "Power BI"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLineChart} size="3x"/>
                    <h3>Statistical Modeling & Analysis</h3>
                    <p>
                        Solid foundation in both frequentist and Bayesian statistical methods including generalised regression models, Bayesian data analysis, time series, spatial, and spatio-temporal modeling. Experienced in applying suitable statistical theory to real-world problems and interpreting results with a critical, analytical mindset.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Programming & Machine Learning</h3>
                    <p>
                        Proficient in Python and R for statistical programming, machine learning, and data manipulation. Background in scientific computing, including extensive use of libraries such as NumPy, SciPy, and SymPy, brings a strong foundation in numerical methods and symbolic computation to data-driven problem solving. Experienced in both supervised and unsupervised learning techniques, including classification, regression, clustering, dimensionality reduction, model selection, ensemble methods, and neural networks.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Communication & Interpretation</h3>
                    <p>
                        Strong ability and experienced in communicating complex analytical results clearly to both technical and non-technical audiences. Skilled in creating visualisations using a variety of software and reports that support data-driven decision.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;