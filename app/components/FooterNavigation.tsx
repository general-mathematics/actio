// components/FooterNavigation.tsx
import React from 'react';
import styles from './FooterNavigation.module.css';

const FooterNavigation: React.FC = () => {
  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
