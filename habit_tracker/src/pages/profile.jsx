import React from 'react';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={styles.subMenuWrap}>
        <div className={styles.subMenu}>
            <div className={styles.userInfo}>
                <h2>Nitesh patel</h2>
                <hr></hr>
                <a href="#">Edit Profile</a>
                <a href="#">Change Password</a>
                <a href="#">Help</a>
                <a href="#">Logout</a>
                <a href="#">Delete Account</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;