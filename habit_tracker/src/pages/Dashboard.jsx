import styles from './Dashboard.module.css';
import Navbar from '../navBar.jsx';

function Dashboard() {
    return(
        <div className={styles.divmain} >

            <div className={styles.topbar}>
            <Navbar />
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