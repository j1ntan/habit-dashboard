import React from 'react';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <div className={styles.profileDet}>
          <h1>Profile</h1>
        </div>
        <hr></hr>
        <div className={styles.profilePoints}>
          <h2>Nitesh Patel</h2>
          <h2>E-mail</h2>
          <h2>Mobile-No.</h2>
          <h2>Help</h2>
          <h2>Settings</h2>
          <h2>DashBoard</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;