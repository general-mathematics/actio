// components/Header.tsx
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Website Tit</h1>
      </div>
      <div className={styles.topRightNav}>
        {/* Top right navigation content */}
      </div>
    </header>
  );
};

export default Header;
