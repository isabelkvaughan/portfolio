import React from 'react';
import NavTabs from './NavTabs';
var ReactRotatingText = require('react-rotating-text');

const styles = {
  header: {
    backgroundColor: '#F5EFEC',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  headerTitle: {
    color: '#A6C2EE',
    margin: '0',
    textDecoration: 'none'
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
      <a href="#about" style={styles.headerTitle}>
        Isabel Noonan - <ReactRotatingText items={['Web Developer', 'Digital Producer', 'Designer']} />

      </a>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
