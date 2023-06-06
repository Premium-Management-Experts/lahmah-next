import React from 'react';
import styles from '../styles/Menu.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Menu() {
  return (
    <div
      className={`${styles['x-search-input']} ${styles['flex-row']} ${styles['flex-row']}`}
    >
      <div
        className={`${styles['input-container']} ${styles['flex-grow']} ${styles['align-items-center']}`}
      >
        <i className={`${styles['fas']} ${styles['fa-search']}`}></i>
        <FaSearch className={`${styles['search']}`} />
        <input placeholder='Search for menu items' />
      </div>
    </div>
  );
}
