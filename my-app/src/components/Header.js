import React from 'react';
import NavTabs from './NavTabs';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <p>Isabel Noonan</p>
      <nav>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
    </header>
  );
}

export default Header;