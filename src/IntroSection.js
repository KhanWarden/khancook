// IntroSection.js
import React from 'react';
import './IntroSection.css';
import mainbg from './mainbg.jpg';

const IntroSection = () => {
  return (<div className="header" style={{ backgroundImage: `url(${mainbg})` }}>
      <h1>THE BEST CULINARY BLOG</h1>
      <h1>HELPFUL TIPS AND RECIPES</h1>
      <p className="small">Welcome to khancook.net - the best culinary blog on the internet. Interesting articles, regular content updates, and much more can be found here!</p>
    </div>
  );
};

export default IntroSection;
