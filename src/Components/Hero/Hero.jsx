import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'> 
        <h1 className='hero-title'><span className="hero-title-highlight">LOREM</span> IPSUM</h1>
        <p className='hero-subtitle'>Welcome to HiMeal.</p>
        <button className='hero-button'>Create Meal</button>
      </div>
    </div>
  );
}

export default Hero;
