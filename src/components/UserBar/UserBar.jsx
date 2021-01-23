import styles from './UserBar.module.css'
import user__img from '../../images/User-img.jpg'

const UserBar = () =>{
    return(
        <div className={styles.user}>
            <div className={`${styles.user__item} ${styles.redBox}`}>

            </div>
            <div className={styles.user__item}>
                <img src={user__img} className={styles.user__img}/>
                <h2 className={styles.user__title}>Peter Parker</h2>
                <p className={styles.user__description}>Software developer in Unicorn</p>
            </div>
            <div className={styles.user__item}>
                <h3 className={styles.item__title}>Following</h3>
                <p className={styles.item__description}>100</p>
            </div>
            <div className={styles.user__item}>
                <h3 className={styles.item__title}>Followers</h3>
                <p className={styles.item__description} >99</p>
            </div>
            <div className={styles.user__item}>
                <div className={styles.user__link}>
                    <a className={styles.view__profile} href={'#'}>View Profile</a>
                </div>


            </div>
        </div>
    );
}
export default UserBar;