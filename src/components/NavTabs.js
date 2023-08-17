import React from 'react';

const styles = {
  navTabs: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginRight: '10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#A6C2EE',
    transition: 'color 0.3s',
    hover: '#54667D'
  },
  activeLink: {
    fontWeight: 'bold',
    color: '#54667D',
  },
  hoverLink: {
    color: '#54667D',
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navTabs}>
      <li style={styles.navItem}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          style={currentPage === 'About' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          className="navLink"
        >
          About
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          style={currentPage === 'Portfolio' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          className="navLink"
        >
          Portfolio
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          style={currentPage === 'Resume' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          className="navLink"
        >
          Resume
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="https://www.linkedin.com/in/isabelknoonan/"
          target="_blank"
          rel="noopener noreferrer"
          style={currentPage === 'LinkedIn' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          className="navLink"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
