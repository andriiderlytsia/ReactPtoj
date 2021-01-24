import React from "react";
import styles from "./Message.module.css";
import userImg from "../../../../images/Users_imgs/usr-img2.png";
import ava from "../../../../images/User-img.jpg"


const Message = (props) => {
    return (
        <div>
            <div>
                <div className={styles.message}>

                    <img className={styles.ava} src={ava}/>
                    <div className={styles.nameAndMessage}>
                        <div className={styles.userName}>
                            Peter Parker
                        </div>
                        <div className={styles.text}>
                            Welcome to the Dealroom-powered Ukrainian ecosystem map. Covering 1300+ startups, investors, accelerators, investments per industry, and more making it the most extensive startup and venture capital ecosystem in Ukraine.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message