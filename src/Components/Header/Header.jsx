import './header.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const Header = () => {
    return (
        <>
            <img className="header__logo" src="../assets/logo.jpg" alt="logo" />
            <ul className="navigation">
                <NavigationItem to='/'>Product <span>&#11167;</span></NavigationItem>
                <NavigationItem to='/pricing'>Pricing <span>&#11167;</span></NavigationItem>
                <NavigationItem to='/about'>About <span>&#11167;</span></NavigationItem>
            </ul>
            <div className="wrapp__buttons">
                <button className="btn__try">Try it</button>
                <button className="btn__login">Log in</button>
            </div>
        </>
    )
};

export default Header;