import './navigationItem.scss';
import { Link } from "react-router-dom"

const NavigationItem = ({children, to}) => {
    return (
        <li className='navigation__item'>
            <Link to = {to}>{children}</Link>
        </li>
    )
}
export default NavigationItem;