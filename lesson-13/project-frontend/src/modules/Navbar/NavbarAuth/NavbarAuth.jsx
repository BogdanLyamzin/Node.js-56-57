import { NavLink } from "react-router-dom";

import styles from "./navbar-auth.module.scss";

const NavbarAuth = ()=> {
    return (
        <div>
            <NavLink className={styles.link} to="/register">Register</NavLink>
             | 
            <NavLink className={styles.link} to="/login">Login</NavLink>
        </div>
    )
}

export default NavbarAuth;