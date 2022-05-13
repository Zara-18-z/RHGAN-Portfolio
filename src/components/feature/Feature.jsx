import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='rh-features-container'> 
      <div className='rh-features-container-title'>
        <div />
        <h1> {title}</h1>
      </div>
      <div className='rh-features-container-text'>
        <p> {text} </p>
      </div>
    </div>
  )
}

export default Feature