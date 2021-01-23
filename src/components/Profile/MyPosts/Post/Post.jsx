import React from "react";
import styles from './Post.module.css'
import Header from "./Header/Header";

const Post =(props) =>{
    return (
        <div className={styles.post}>
           <Header />
           <div>{props.message}Awesome. Remember -- you can just drag and drop these images to your desktop and then drag them back into your Facebook comments.</div>

        </div>
    )
}
export default Post;