import React from 'react';
import NavTabs from './NavTabs';
import ReactRotatingText from 'react-rotating-text';

const styles = {
  header: {
    backgroundColor: '#F5EFEC',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#A6C2EE',
    margin: '0',
    textDecoration: 'none'
  },
  rotatingText: {
    fontStyle: 'italic',
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
      <a href="#about" style={styles.headerTitle}>
        Isabel Noonan - <ReactRotatingText style={styles.rotatingText} items={['Web Developer', 'Digital Producer', 'Designer', 'Project Manager']} />

      </a>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
