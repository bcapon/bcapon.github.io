import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

ReactGA.initialize('G-6DVH9D165Y'); // Initialize GA4

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);

  return null;
};

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <PageViewTracker />
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        {/* <Contact /> */}
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
