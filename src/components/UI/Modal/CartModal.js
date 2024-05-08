import React from 'react';
import styles from './CartModal.module.scss';
import Portal from '../Portal/Portal';

const BackDrop = ({ children }) => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children }) => {
  return (
    <>
      <Portal destId="backdrop-root">
        <BackDrop />
      </Portal>
      <Portal destId="overlay-root">
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default CartModal;
