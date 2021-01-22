import classes from './Profile.module.css';

const Profile = () =>{
    return(   <div className={classes.content}>
        {/*<div>*/}
        {/*    <img src={'https://change-itn.eu/wp-content/uploads/2018/07/long.jpg'}/>*/}
        {/*</div>*/}
        <div>
            Ava + description
        </div>
        <div>
            myposts
            <div>
                new post
            </div>
            <div>
                post1
            </div>
            <div>
                post2
            </div>
        </div>

    </div>);
}
export default Profile;