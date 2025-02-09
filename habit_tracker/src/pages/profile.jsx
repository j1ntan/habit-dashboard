import React from 'react';
import styles from './profile.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


const Profile = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  const data = {
    name: 'abc',
    userName: 'abcd',
    email: 'abcd@gmail.com'
  };

  return (
        <div className={styles.profileContainer}>
          <button className={styles.closeButton} onClick={onClose}><IoMdCloseCircleOutline /></button>
          <div className={styles.profile}><CgProfile className={styles.icon}/><h1 className={styles.textcontainer}>{data.name}</h1></div>
          
          <p className={styles.textcontainer}>Username: {data.userName}</p>
          <p className={styles.textcontainer}>Email: {data.email}</p>
        </div>
  );
}

export default Profile;