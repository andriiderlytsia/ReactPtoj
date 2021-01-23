import React from "react";
import ava from '../../../../../images/User-img.jpg'
import styles from './Header.module.css'
import clockIcon from '../../../../../images/icons/clock.png'
const Header =() =>{
    return (
        <div className={styles.header}>
            <img className={styles.ava} src={ava} />
            <div className={styles.nameAndTime}>
                <div className={styles.userName}>
                    Peter Parker
                </div>
                <div className={styles.time}>
                    <img  className={styles.clockIcon} src={clockIcon} />
                    <div>3 min ago</div>
                </div>
            </div>
            <div className={styles.settings}>
                <div className={styles.settings__item}></div>
                <div className={styles.settings__item}></div>
                <div className={styles.settings__item}></div>

            </div>
        </div>
    )
}
export default Header;