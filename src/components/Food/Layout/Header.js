import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src="../../../assets/meals.jpg" alt="Looks very delicious meals" />
      </div>
    </>
  );
};
export default header;
