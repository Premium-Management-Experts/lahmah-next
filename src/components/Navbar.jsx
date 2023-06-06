import styles from '../styles/Navbar.module.css';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['flat-topbar-container']}>
        <div
          className={`${styles['flex-row']} ${styles['flex-between']} ${styles['flat-topbar']} ${styles['align-center']} ${styles['flex-wrap']}`}
        >
          <div className={styles['branch-desktop']}></div>
          <div className={styles['track-order-btn-wrapper']}></div>
          <div
            className={`${styles['flex-row']} ${styles['align-items-center']}`}
          >
            <div
              className={`${styles['d-flex']} ${styles['align-items-center']}`}
            >
              <BsGlobe className={styles['zaid-svg']} />
              <span className={styles['style-pAKFj']}>عربي</span>
            </div>
            <div
              className={`${styles['login-button']} ${styles['flex-row']} ${styles['align-items-center']}`}
            >
              <AiOutlineUser className={styles['zaid-svg']} />

              {/* <i className={`${styles['far']} ${styles['fa-user']}`}></i> */}
              <span className={styles['mlx-2']}>Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
