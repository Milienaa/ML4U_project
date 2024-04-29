import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


const Layout = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <Header/>
            </div>
            <div className="content">
                <Outlet /> 
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
};
export default Layout;