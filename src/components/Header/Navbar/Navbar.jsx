import './Navbar.css'
const NavBar = () =>{
    return (<nav className={'nav'}>
        <div className={'nav__item'}><a href={'#'}>Profile</a></div>
        <div className={'nav__item'}><a href={'#'}>Messages</a></div>
        <div className={'nav__item'}><a href={'#'}>News</a></div>
        <div className={'nav__item'}><a href={'#'}>Music</a></div>
    </nav>);
}
export default NavBar;