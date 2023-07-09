import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Cormorant Upright',
    fontSize: '5rem',
    marginTop: '50px',
    color: '#A6C2EE',
  },
  body: {
    textAlign: 'center',
    width: '50%'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px 0',
  },
  image: {
    width: 'calc(33.33% - 10px)',
    height: '300px',
    backgroundColor: '#A6C2EE',
  },
  '@media (max-width: 767px)': {
    imageContainer: {
      flexDirection: 'column',
      margin: '10px 0', // Mobile: Adjust the margin based on your needs
    },
    image: {
      width: '100%', // Mobile: Full width, one image per row
      height: '300px', // Mobile: Adjust the height based on your needs
    },
  },
};

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Isabel Noonan</h1>
      <p style={styles.body}>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <div style={styles.imageContainer}>
        <div style={styles.image}><img src="./public/jade-stephens-fTVigwKgRYA-unsplash.jpg" /></div>
        <div style={styles.image}></div>
        <div style={styles.image}></div>
      </div>
    </div>
  );
}

{/* <img src="./public/jade-stephens-fTVigwKgRYA-unsplash.jpg" />
<img src="../../public/about-isabel.jpg" />
<img src="../../public/about-farm.jpg" /> */}