import './footer.scss';
import NavigationItem from "../NavigationItem/NavigationItem";

const Footer = () => {
    return (
        <>
            <div className="footer__main">
                <img className="footer__logo" src="../../assets/logo.jpg" alt="logo" />
                {/* <p className="footer__notes">Go from customer</p>
                <p className="footer__notes">feedback to action</p>
                <p className="footer__notes">without the guesswork</p> */}
                <p className="footer__copyright">Copyright | &copy;2022<br/>All rights reserved<br/>Web-development</p>
            </div>
            <ul className="footer__nav">
                    <NavigationItem to='/'>Product</NavigationItem>
                    <NavigationItem to='/analysis'>Customer Review Analysis</NavigationItem>
                    
            </ul>
            <ul className="footer__nav">
                    <NavigationItem to='/pricing'>Pricing</NavigationItem>
            </ul>
            <ul className="footer__nav">
                    <NavigationItem to='/about'>About</NavigationItem>
                    <NavigationItem to='/about/team'>Our team</NavigationItem>
            </ul>
            <ul className="footer__nav">
                    <NavigationItem to=''>Get in touch</NavigationItem>
                    <NavigationItem to=''>Support</NavigationItem>
                    <NavigationItem to=''><button className="btn__login">Log in</button></NavigationItem>
            </ul>
        </>
    );
};
export default Footer;