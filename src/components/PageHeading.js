import React from 'react';

const styles = {
    pageHeading: {
        textAlign: 'center',
        fontFamily: 'Cormorant Upright',
        fontSize: '5rem',
        color: '#A6C2EE',
        marginTop: '50px'
    },
  };

export default function pageHeading({ pageHeading }) {
  return (
    <h1 style={styles.pageHeading}>{pageHeading}</h1>
  );
}
