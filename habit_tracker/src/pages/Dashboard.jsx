import styles from './Dashboard.module.css';

function Dashboard() {
    return(
        <div className={styles.divmain} >
            <div className={styles.topbar}>
                <div className={styles.logoname} >*name & logo*</div>
                <div className={styles.bar} > bar</div>
                <div className={styles.profile} >*profile*</div>
               
            </div>
            <div className={styles.bottombar}>
                <div className={styles.leftbar}>
                
                </div>
                <div className={styles.rightbar}>

                </div>

            </div>
        </div>
    )
}

export default Dashboard;