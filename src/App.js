import React from 'react';
import {Team, Code, Documentation, WhatRHGAN, Header} from './containers';
import {Navbar} from './components';
import './App.css'
import {Helmet} from "react-helmet";

const App = () => {
  return (
      <div className='App'>
         <Helmet>
              <meta charSet="utf-8" />
              <title>RH-GAN</title>
              <link rel="canonical" href="http://Rh-GAN.com/" />
              <meta name="description" content="Helmet application" />
          </Helmet> 
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <WhatRHGAN />
        <Documentation />
        <Code />
        <Team />
      </div>
  )
}

export default App