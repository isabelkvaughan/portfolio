import React from 'react';
import NavTabs from './NavTabs';

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
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
      <p style={styles.headerTitle}>Isabel Noonan</p>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;