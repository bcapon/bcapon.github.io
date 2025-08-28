import React from "react";
import ucas from '../assets/images/ucas.gif';
import UG_project from '../assets/images/UG_project.gif';
import housing_project from '../assets/images/housing_project1.gif';
import covid from '../assets/images/covid.gif';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/bcapon/statistical-programming/blob/main/projects/project2/proj2.r" target="_blank" rel="noreferrer"><img src={covid} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bcapon/statistical-programming/blob/main/projects/project2/proj2.r" target="_blank" rel="noreferrer"><h2>COVID-19 Project</h2></a>
                <p>
                    This R project used NHS data on death counts during the first wave of the 2020 COVID-19 pandemic to 
                    predict when individuals in England first contracted the disease. To do this,
                    we used a simulation based method and iterated it until our fatal incident 
                    rates matched the death time distribution very well. The data was plotted and
                    our uncertainty was quantified by using a bootstrapping method only once 
                    our results had converged. The figure above shows initial iterations.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/bcapon/ucas-analysis/blob/main/code.R" target="_blank" rel="noreferrer"><img src={ucas} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bcapon/ucas-analysis/blob/main/code.R" target="_blank" rel="noreferrer"><h2>Bayesian Analysis of UCAS Data</h2></a>
                <p>
                    Student satisfaction is a significant metric in higher education, influencing institutional rankings, funding, and policy decisions.
                    This R project analyses data from 116 British universities, sourced from The Guardian University Guide Ranking 2025 and the 2022 UCAS Equality Report, 
                    to examine how institutional and demographic factors influence student satisfaction with feedback. To this end,
                    a Bayesian Generalised Linear Model (GLM) is employed using rstan to identify key drivers of feedback satisfaction.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/bcapon/bsc-project" target="_blank" rel="noreferrer"><img src={UG_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bcapon/bsc-project" target="_blank" rel="noreferrer"><h2>Undergraduate Physics Project</h2></a>
                <p>
                    This Python project, leveraging various libraries such as NumPy and matplotlib, investigated the pros, cons, 
                    and technological feasibility of the two known methods of 
                    generating artificial gravity (a linearly accelerating or rotating spacecraft) during space travel. The 
                    animation above shows the effect of the coriolis force on a ball thrown directly upwards in a rotating 
                    spacecraft.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/bcapon/housing-project" target="_blank" rel="noreferrer"><img src={housing_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bcapon/housing-project" target="_blank" rel="noreferrer"><h2> Kaggle Housing Prices Competition </h2></a>
                <p>
                    Before my postgraduate studies I completed a number of courses on Kaggle+DataCamp and put my knowledge to test in a learner Kaggle 
                    competition based on the Ames Housing dataset leveraging libraries such as NumPy, pandas, matplotlib, seaborn, and scikit-learn. 
                    My results for the regression problem scored in the top 10 out of over 100,000 final 
                    submissions on Kaggle before the leaderboard reset. N.B. My master's degree has provided me with a greater insight into 
                    regression models and I am implementing these new ideas.
                </p>
            </div>
            {/*
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={ucas} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Alzheimer's Disease ML</h2></a>
                <p>
                    The Alzheimer's Disease Neuroimaging Initiative (ADNI) have recently conducted a multi-center, longitudinal study to support the investigation and development of treatments that slow or stop the progression of Alzheimer's disease (AD). This project leverages a subset of ADNI data (stored as `adnidata.csv`) to develop a predictive model of cognitive decline over a 24-month period. Cognitive decline is measured using Alzheimer's Disease Assessment Scale-Cognitive Subscale (ADAS-Cog) 13, and covariates include clinical, demographic, imaging, and biological data relating to the patient.
                    We begin with a linear regression model to establish a benchmark for prediction accuracy. To improve performance, we then explore alternative regression techniques, including Ridge Regression to address multicollinearity, Lasso Regression for feature selection, Elastic Net Regression to balance the strengths of both methods. We apply feature engineering techniques as needed, alongside Power Transformations, to normalize skewed variables, and one-hot encoding to account for categorical features.
                    Model performance is assessed using mean squared error (MSE) and the correlation coefficient ($R^2$). Elastic Net Regression is revealed to have the lowest MSE and highest $R^2$. In final stages, our model has $MSE = 32.94$ and $R^2 = 0.77$). The most significant covariates in the final model turn out to be baseline cognitive performance and baseline diagnosis with Alzheimer's, and we recommend physicians take this into account as they prioritize their drugs and therapies that come available.
                </p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={ucas} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>Loan Default</h2></a>
                <p>
                    This project used anonymised loan-level data to support the development of more accurate credit performance models. This data covered loans originated between 2017 and 2020, to build a predictive model that determines whether a mortgage loan will default or prepay.
                    Our dataset focuses on fully amortising, fixed-rate, single-family loans, excluding active loans, to ensure that each observation has a known outcome. Features include individual attributes, seller/servicer attributes, loan terms, property details, and geographical information. These insights can hopefully help Freddie Mac better understand default patterns and proactively manage portfolio risk in the future.
                    Given the extreme class imbalance between prepayments and defaults in the dataset, we implemented resampling strategies, threshold tuning, and selected the F1-score as the primary evaluation metric. After exploring a couple of models, we selected an eXtreme Gradient Boosting (XGBoost) classifier trained with Synthetic Minority Oversampling Technique (SMOTE) resampling, which demonstrated the best performance in balancing precision and recall with an F1 score of almost double the baseline (~0.21). We have provided a model that identifies borrower credit quality, loan structure, and individual sellers and servicers as key drivers of default risk. 

                    Built an XGBoost classifier pipeline to predict mortgage default vs. prepayment using anonymised loan data focussing on fixed-rate, fully amortizing single-family loans with known outcomes. Addressed extreme class imbalances using SMOTE resampling, threshold tuning, and optimisation for F1-score. Key predictors included borrower credit quality, loan structure, and seller/servicer characteristics.                
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={ucas} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Small Language Model</h2></a>
                <p>
                    This script uses a p-th order Markov model to generate random sequences of text based on word patterns
                    in James Joyce's Ulysses. This will be done by using a 'small language model’ in which we will write
                    a far simpler and much smaller version of the typical and revolutionary large language models. A high 
                    level outline of what the code is doing will be written in parts below each question, with line-by-line 
                    comments and function descriptions to show how the task is carried out.
                </p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={ucas} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Linear Mixed Model</h2></a>
                <p>
                    This script implements a Linear Mixed Model from scratch, given by the formula y = Xβ + Zb + ε.
                    The model follows a similar format to the standard linear model (y = Xβ + ε),
                    but will include the Zb term to incorporate fixed but random effects. b will
                    contain the random effects, following a normal distribution with mean 0 and
                    covariance matrix φ_θ parameterised by an unknown vector parameter θ, whilst Z is a
                    model matrix for b. The idea behind this extra term is that we can now account
                    for clustering of data or in other words, there is randomness at different levels
                    within the data we can now account for.
                </p>
            </div>
            */}
        </div>
    </div>
    );
}

export default Project;