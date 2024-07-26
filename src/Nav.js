import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="menubar">
            <li><Link to='/'>AutoMob-Mechanic</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/booking'>Booking</Link></li>
            <li><Link to='mailto:contact@automob.co.in'>contact@automob.co.in &#x2709;</Link></li>
            <li><Link to='tel:999 999 9999'>999 999 9999 &#x260E;</Link></li>
        </nav>
    );
}

export default Nav;