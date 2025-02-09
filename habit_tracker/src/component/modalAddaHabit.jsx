import React from 'react';
import styles from './modalAddaHabit.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";



const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}><IoMdCloseCircleOutline />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;