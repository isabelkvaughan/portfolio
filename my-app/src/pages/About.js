import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', // Adjust the height based on your needs
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
  }
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
      
    </div>

  );
}
