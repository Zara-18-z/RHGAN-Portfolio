import React from 'react';
import './documentation.css';
import { Feature } from '../../components';

function Possibility() {
  return (
    <div className='rh_documentation section__margin' id='documentation'>
      <div className='rh_feature_title'>
        <Feature 
          title = "Documentation"
        />
      </div>
      <div className='rh_documentation_heading'>
        <h1 className='gradient__text'>
        Our Documentation can help you understand the project better. The documentation will give you access to all relevant information without the chances of being lost.
        </h1>
      </div> 
      <div className='rh_documentation_container'>
        <Feature 
          title = "Link"
          />
         <div> 
          <a className = 'LinkContainer' href = 'https://liveumb-my.sharepoint.com/:p:/g/personal/f_elalaoui001_umb_edu/EQzkWwT5KdNAjkHEPUSSQ-oBWR9fQmBLNwr5wz0wqMgN9Q?e=ZQT3n2' target="_blank" rel="noopener noreferrer" > Click to open the documentation! </a> 
        </div>
      </div>
    </div>
  )
}


export default Possibility