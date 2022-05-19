# RHGAN-Portfolio

## Abstract 

Generative Adversarial Networks are one of the most recent powerful machine learning models that generate initiating realistic data from a given data set. Generative adversarial networks were initially designed and introduced by Ian Goodfellow in June 2014. They are simply neural networks class of machine learning frameworks. They were presented with the intention of overcoming the data availability issues that arise with deep neural networks DNNs. DNNs have been used widely among various domains and applications. These networks rely heavily on massive sets of labeled training data which is either unavailable or costly to obtain. 

GANs provide the possibility of developing and generating richer data sets with training on very small labeled data sets.  GANs achieve a high level of realism in generating realistic data sets by combining two neural network models. A generative model that attempts to create realistic data sets by being trained on given labeled data sets, and a discriminator model that determines if the output data is synthetic or belongs to the given training data.


## About
 
- Project Type: Capstone Project 
- University: UMass Boston
- Department: College of Math and Science 
- Course: CS410 Introduction to Software Engineering 
- Term: Spring 2022 
- Supervised by: Professor Daniel Haehn
- Developed for: Client Ricarda Haehn 
- Developed by: 
    - Zara El Alaoui 
    - Vladimir Pierre Louis 
    - Sara Saddighi 
    - Zhuoping Chen
    - Jessica Carvalho

## Purpose

Our final project is a fully back-end based application that takes in a dataset as an input and returns
a generated artwork as an output. The application supports a variety of themes which are listed as
the following:

- Demons
- Hell
- Psychedelic
- Purgatory
- Dark
- Depression
- All of the themes together

The application takes user input for the theme selection as well as for the desired output size, as our
application supports two sizes which are:

- One picture
- A 7 x 7 collection of pictures

The application then uses the corresponding NPY file as training dataset as an input and generates
artwork as an output. 

## Technologies

- Python: The GAN neural network was built using Python which is a high-level, interpreted, general-purpose programing language. 

- PyPI: For installing most of the python libraries needed, we used PyPI which is a package manager for python packages and modules. 

- Tensorflow: We utilized the Tensorflow library which is an open-source framework machine learning and artificial intelligence. Tensorflow is the main library that we used to construct and build both of the neural networks that construct our GAN: the generator and the discriminator. 

- React & JavaScript: Since we also developed a project portfolio website, we used React and Javascript for a modern user interface. Our project portfolio website is hosted on Github Pages which is a free web hosting service provided by GitHub. We used gh-pages which is an NPM package that allowed us to do the process. Our website provides information about our project, and links for the documentation, presentation slides, and the Github repository for the codebase, as well as links to LinkedIn profiles for all team members.

- Conda: We used conda to set up our environement. Conda is an open source package management system and environement management system. 

## Links 
- Project Portfolio Website: https://zara-18-z.github.io/RHGAN-PortfolioWebsite/
- Presentation Slides: https://liveumb-my.sharepoint.com/:p:/g/personal/f_elalaoui001_umb_edu/EQzkWwT5KdNAjkHEPUSSQ-oBWR9fQmBLNwr5wz0wqMgN9Q?e=VSzy1X
 
## Hardware 

To be able to run this project, this software relies on the user having good hardware (both GPU and CPU) to perform the training and generate the images. We were given access through our university to use Chimera which is a heterogeneous distributed memory high performance compute cluster, comprised of a head node and 12 compute nodes. 

## Environment Setup 

Before you are able to run this project you need to first setup the proper environment on your computer. 

- Installing Python: The first thing you need to do is to install python on your Machine. (If you already have python installed you can skip this step.):
    - Go to Python’s download page and download the appropriate installer for your machine.
    - Make sure to add python to your path when prompted.
- Installing Conda: 
- Installing Tensorflow: 


## Code Documentation 
## Folder Structure 

This repo consists of the following folders structure: 
- RH GAN: Main GAN software folder 
    - Data_NPY_Files: Input Datasets as NPY files for all themes supported by the software 
        - dark.npy
        - demons.npy 
        - hell.npy
        - purgatory.npy
        - psychedelic.npy
        - allThemes.npy
    - Output: The output folders where the outputs are saved for each theme 
        - dark_output 
        - demons_output 
        - hell_output 
        - purgatory_output 
        - psychedelic_output 
        - allThemes_output 
    - Resized: The resized output where the resized outputs are saved after running the Img_Resize.npy on an Output folder. 
        - dark_resized
        - demons_resized 
        - hell_resized 
        - purgatory_resized
        - psychedelic_resized 
        - allThemes_resized 
    - GAN.py: The main software that generates artwork after collecting user input for the theme and size selection.  
    - Img_Resize.py: The resizing program that resizes output images. 
- Supplemental Code: Supplemental programs that were used to scrape, pre-process, pre-load and save images as NPY files. 
    - Scraped_Images: The folder that contains the file that resize all scraped images and save them to an NPY file. 
        - NPY_resize.py 
    - Scraping.py: The scrapping program that scrapes images from Google Images. 
    - Rotate.py: The Rotating program that rotates the scrapped images to have a larger dataset. 

##Supplemental Documents and Resources Used:
- https://www.kaggle.com/code/isaklarsson/gan-art-generator/notebook
- Link 2
- link 3
- link 4
- link 5
