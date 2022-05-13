import React from 'react';
import { Feature } from '../../components';
import './whatRHGAN.css';

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whatisRHGAN'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title = "What is RHGAN?"
          text = "RHGAN is a generative adversarial network (GAN) that is built and trained based on different themes datasets. Our training datasets is a vast collection of databases that has been scraped for training. This database is used for training the generative neural network of the RHGAN."
        />
      </div>
      <div className='gpt3__whatgp3-heading'>
        <h1 className='gradient__text'>
          New And Unique Artworks Outside the Realm of Your Imagination!
        </h1>
      </div> 
      <div className='gpt3__whatgpt3-container'>
        <Feature 
          title = "Slides"
          text = "With just few slides prepared by the team, everything about our project become easy to follow. Weeks of research are put across in a simple format. Click on the link to get directed to the slides."
          />
        <Feature 
          title = "Documentation"
          text = "Our Documentation can help you understand the project better. The documentation will give you access to all relevant information without the chances of being lost."/>
        <Feature 
          title = "Code"
          text = "You can easily access our Github repository for an open source code base to better understand the logic behind our back-end"/>
      </div>
    </div>
  )
}

export default WhatGPT3