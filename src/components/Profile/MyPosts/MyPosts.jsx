import React from 'react'
import Post from './Post/Post'
import styles from './MyPost.module.css'
import Profile from "../Profile";
const MyPosts =() =>{
    return(
        <div className={styles.posts}>these are my posts
            <Post message = "firsrt prop" />
            <Post />
            <Post />
            <Post />
        </div>

    )
}
export default MyPosts;