import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";
// import userImg from './../../../../images/Users_imgs/usr-img2.png';
// import clockIcon from "../../../../images/icons/clock.png";

const Dialog =(props) =>{
    return (
        <div>
            <NavLink to={`/Messages/${props.user.name}`} className={styles.dialog}>
                {/*<img className={styles.ava} src={props.user.ava} />*/}
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className={styles.ava} src={props.user.ava} alt={'img'}/>
                <div className={styles.nameAndTime}>
                    <div className={styles.userName}>
                        {props.user.name}
                    </div>
                    <div className={styles.lastMessage}>Last message</div>
                </div>
            </NavLink>
        </div>
    )
}
export default Dialog;