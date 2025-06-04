import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "R",
    "SQL",
    "Python",
    "SQL",
    "PostgreSQL",
    "NumPy",
    "SciPy",
    "Stan", 
    "JAGS"
];

const labelsSecond = [
    "Git",
    "AWS",
    "Azure",
    "Pandas",
    "NumPy", 
    "matplotlib", 
    "pandas", 
    "seaborn", 
    "scikit-learn", 
    "PyTorch",
    "TensorFlow"
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
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Statistical Modeling & Analysis</h3>
                    <p>
                        Solid foundation in statistical methods including generalized regression, Bayesian analysis, time series, and spatio-temporal modeling. Experienced in applying statistical theory to real-world problems and interpreting results with a critical, analytical mindset.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Programming & Machine Learning</h3>
                    <p>
                        Proficient in Python and R for statistical programming, machine learning, and data manipulation. Background in scientific computing, including extensive use of libraries such as NumPy, SciPy, and SymPy, brings a strong foundation in numerical methods and symbolic computation to data-driven problem solving. Experienced in both supervised and unsupervised learning techniques, including classification, regression, clustering, dimensionality reduction, model selection, ensemble methods, and neural networks, using libraries such as scikit-learn and TensorFlow. 
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Communication & Interpretation</h3>
                    <p>
                        Strong ability to communicate complex analytical results clearly to both technical and non-technical audiences. Skilled in creating visualizations and reports that support data-driven decision making.
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