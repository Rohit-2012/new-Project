import styles from '../CSS/nav-bar.module.css'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
export function NavBar() {
    const [menu, setMenu] = useState(true)

    function handleClick() {
        setMenu(!menu)
    }
    return(
        <div className={styles.navBar}>
        <div className={styles.listItems}>
            <img src="https://scontent.frdp1-1.fna.fbcdn.net/v/t1.18169-9/17309366_1874079762864330_8295266929445563338_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mat1C3Pxg60AX-nL3M7&_nc_oc=AQmGves4L4aMWAthrKuchhCVapZ66RBlheotlenTL1sWLQgK6WXa4QKvRPnbaFdrdhA&_nc_ht=scontent.frdp1-1.fna&oh=00_AfCQioZoihC7FrMJU7oxSo4teL957QIy9fjX5F6BAuGDdw&oe=64409D85" alt="Logo" />
            <span className={styles.nameSpan}>Gulathi Enterprises |</span>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
        </ul>
       
        </div>
        <div>
            <button className={styles.plainBtn}>Login</button>
            <button className={styles.btn2}>Sign Up</button>
            <MdMenu style={{fontSize: 40}} className={styles.menu} onClick={handleClick}/>
            {menu&& <ul className={styles.hiddenMenu}>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
            <button>Login</button>
            <button>Sign Up</button>
            </ul>}
        </div>
        </div>
    )
}