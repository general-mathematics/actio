// components/TopRightNav.tsx
import React from 'react';
import styles from './TopRightNav.module.css';


const TopRightNav: React.FC = () => {
  return (
    <div className="top-right-nav">
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default TopRightNav;
 