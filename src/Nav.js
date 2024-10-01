import { Link } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
    const [ toggleSideBar, setToggleSideBar ] = useState(false);

    const showSideBar = () => {
        setToggleSideBar(true);
    }
    const hideSideBar = () => {
        setToggleSideBar(false);
    }

    return (
        <>
        <nav>
            <ul className="menubar">
                <li><Link to='/'>AutoMob-Mechanic</Link></li>
                <li className="hideonmobile"><Link to='/services'>Services</Link></li>
                <li className="hideonmobile"><Link to='/booking'>Booking</Link></li>
                <li className="hideonmobile"><Link to='mailto:contact@automob.co.in'>Conatct via email &#x2709;</Link></li>
                <li className="hideonmobile"><Link to='tel:999 999 9999'>call us &#x260E;</Link></li>
                <li className="menubtn" onClick={showSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
            </ul>
        </nav>
        {
            toggleSideBar
            ? <nav onClick={hideSideBar}>
                <ul className="sidebar">
                    <li onClick={hideSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/booking'>Booking</Link></li>
                    <li><Link to='mailto:contact@automob.co.in'>Contact via email &#x2709;</Link></li>
                    <li><Link to='tel:999 999 9999'>call us &#x260E;</Link></li>
                </ul>
              </nav>
            : null
        }
        </>
    );
}

export default Nav;