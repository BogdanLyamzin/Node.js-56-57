import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

import { isUserLogin } from "../../redux/auth/auth-selectors";

import styles from "./navbar.module.scss";

const Navbar = () => {
    const isLogin = useSelector(isUserLogin);

    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.navbarRow}>
                    <Link to="/">Logo</Link>
                    <NavbarMenu />
                    {!isLogin && <NavbarAuth />}
                    {isLogin && <NavbarUser />}
                </div>
            </div>
        </div>
    )
}

export default Navbar;