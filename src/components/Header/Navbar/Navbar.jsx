import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (<nav className={s.nav}>
        <div><NavLink className={s.nav__item} to={"/Profile"} activeClassName ={s.act}>Profile</NavLink></div>
        <div><NavLink className={s.nav__item} to={"/Messages"} activeClassName ={s.act}>Messages</NavLink></div>
        <div><a className={s.nav__item} href={'#'}>News</a></div>
        <div><a className={s.nav__item} w href={'#'}>Music</a></div>
    </nav>);
}
export default NavBar;