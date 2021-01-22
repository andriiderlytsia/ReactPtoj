import './UserBar.css'
import user__img from './../images/User-img.jpg'
const UserBar = () =>{
    return(
        <div className={'user'}>
            <div className="user__item red--box">

            </div>
            <div className="user__item">
                <img src={user__img} className={'user__img'}/>
                <h2 className="user__title">Peter Parker</h2>
                <p className={'user__description'}>Software developer in Unicorn</p>
            </div>
            <div className="user__item">
                <h3 className="item__title">Following</h3>
                <p className={'item__description'}>100</p>
            </div>
            <div className="user__item">
                <h3 className="item__title">Followers</h3>
                <p className={'item__description'} >99</p>
            </div>
            <div className="user__item">
                <div className={'user__link'}>
                    <a className={'view__profile'} href={'#'}>View Profile</a>
                </div>


            </div>
        </div>
    );
}
export default UserBar;