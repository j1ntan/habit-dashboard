import React from 'react';
import styles from './profile.module.css';


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
          <button className={styles.closeButton} onClick={onClose}></button>
          <h1>Profile</h1>
          <p className={styles.textcontainer}>Name: {data.name}</p>
          <p className={styles.textcontainer}>Username: {data.userName}</p>
          <p className={styles.textcontainer}>Email: {data.email}</p>
        </div>
  );
}

export default Profile;