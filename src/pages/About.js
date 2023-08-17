import React from 'react';
import PageHeading from '../components/PageHeading';
import imageOne from '../assets/jade-stephens-fTVigwKgRYA-unsplash.jpg';
import imageTwo from '../assets/about-isabel.jpg';
import imageThree from '../assets/about-farm.jpg';
import '../styles/about.css';

const styles = {
  contactItem: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#A6C2EE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contactLink: {
    color: '#A6C2EE',
   },
};

export default function About() {
  return (
    <div className='aboutContainer'>
      <PageHeading pageHeading= 'Isabel Noonan'/>
      <div className='contentContainer'>
        <p className='body'>
          As an accomplished Producer and Project Manager, Isabel brings a wealth of experience in collaborating with cross-functional teams to deliver effective solutions. With 6 years of industry expertise in both agency and client-side roles, spanning from start-ups to global enterprises, she possesses a versatile skill set encompassing Digital Production, Project Management, Web Development, and Creative Design.
        </p>
        <p style={styles.contactItem}>+31 6 29 75 51 91  —  <a style={styles.contactLink} href="mailto:isabelknoonan@gmail.com">isabelknoonan@gmail.com</a></p>
      </div>
      <div className='imageContainer'>
        <div className='image'><img src={imageOne} className='imageE' alt='amsterdam'/></div>
        <div className='image'><img src={imageTwo} className='imageE' alt='isabel-nz'/></div>
        <div className='image'><img src={imageThree} className='imageE' alt='isabel-farm'/></div>
      </div>
    </div>
  );
}
