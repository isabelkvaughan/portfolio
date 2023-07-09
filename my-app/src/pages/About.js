import React from 'react';
import imageOne from '../assets/jade-stephens-fTVigwKgRYA-unsplash.jpg';
import imageTwo from '../assets/about-isabel.jpg';
import imageThree from '../assets/about-farm.jpg';
import '../styles/about.css';

export default function About() {
  return (
    <div className='aboutContainer'>
      <h1 className='heading'>Isabel Noonan</h1>
      <div className='contentContainer'>
        <p className='body'>
          As an accomplished Producer and Project Manager, Isabel brings a wealth of experience in collaborating with cross-functional teams to deliver effective solutions. With 6 years of industry expertise in both agency and client-side roles, spanning from start-ups to global enterprises, she possesses a versatile skill set encompassing Digital Production, Project Management, Web Development, and Creative Design.
        </p>
      </div>
      <div className='imageContainer'>
        <div className='image'><img src={imageOne} className='imageE'/></div>
        <div className='image'><img src={imageTwo} className='imageE'/></div>
        <div className='image'><img src={imageThree} className='imageE'/></div>
      </div>
    </div>
  );
}
