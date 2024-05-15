import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ModalWindow from "./Components/ModalLogForm/ModalLogForm";


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
            <ModalWindow />
        </div>
    )
};
export default Layout;