import React from 'react';
import './team.css';
import { Feature } from '../../components';

function Footer() {
  return (
    <div className='rh_documentation section__margin' id='team'>
      <div className='rh_feature_title'>
        <Feature 
          title = "Team"
        />
      </div>
      <div className='rh_Team_heading'>
        <h1 className='gradient__text'>
        The RH team is the single greatest asset that guarantees the RH-GAN success. 
        </h1>
      </div> 
      <div className='rh_documentation_container'>
        <Feature 
          title = "Team LinkedIn Links"
          />
      <div className='TeamListContainer'>
        <div> <a className = 'LinkContainer' href = 'https://www.linkedin.com/in/zara-el-alaoui-18a5001a1/' target="_blank" rel="noopener noreferrer" > Zara El Alaoui</a> </div>
        <div> <a className = 'LinkContainer' href = 'https://www.linkedin.com/in/vladimirpierre-louis/' target="_blank" rel="noopener noreferrer" > Vladimir Pierre Louis </a> </div>
        <div> <a className = 'LinkContainer' href = 'https://www.linkedin.com/in/sara-saddighi-70a39476/' target="_blank" rel="noopener noreferrer" > Sara Saddighi </a> </div>
        <div> <a className = 'LinkContainer' href = 'https://www.linkedin.com/in/zhuoping-chen-b30a83239/' target="_blank" rel="noopener noreferrer" > Zhuoping Chen </a> </div>
        <div> <a className = 'LinkContainer' href = 'https://www.linkedin.com/in/jessicafirmecarvalho/' target="_blank" rel="noopener noreferrer" > Jessica Carvalho </a> </div>
      </div>
      </div>
    </div>
  )
}
export default Footer