import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () =>{
    return(   <div className={classes.content}>
        {/*<div>*/}
        {/*    <img src={'https://change-itn.eu/wp-content/uploads/2018/07/long.jpg'}/>*/}
        {/*</div>*/}
        <div>
            Ava + description
        </div>
        <MyPosts />


    </div>);
}
export default Profile;