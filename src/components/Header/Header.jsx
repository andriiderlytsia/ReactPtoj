import './Header.css';
import logo from '../../images/Logo.jpg'
import NavBar from "./Navbar/Navbar";

const Header = () =>{
    return (
        <header className={'header'}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src={logo} alt={'logo'}/>
                    </div>
                    <NavBar />

                </div>
            </div>

        </header>
    );
}
export default Header;