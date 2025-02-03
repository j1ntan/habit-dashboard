import styles from './Dashboard.module.css';
import Navbar from '../navBar.jsx';
import { useState } from 'react';
import Modal from '../component/modalAddaHabit.jsx'
import Addahabit from './addahabit.jsx';

function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (

        <div className={styles.divmain} >

            <div className={styles.topbar}>
                <Navbar />
            </div>
            <div className={styles.bottombar}>
                <div className={styles.leftbar}>
                    <calendar />
                    <p>hello </p>
                    <button onClick={handleOpenModal}>Add a Habit</button>
                        <Modal show={showModal} onClose={handleCloseModal} >
                            <Addahabit />
                        </Modal>
                </div>
                <div className={styles.rightbar}>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;