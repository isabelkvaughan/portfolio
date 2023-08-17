import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import '../styles/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
  <div>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    <main>
      {renderPage()}
    </main>
    <Footer />
  </div>
);
}