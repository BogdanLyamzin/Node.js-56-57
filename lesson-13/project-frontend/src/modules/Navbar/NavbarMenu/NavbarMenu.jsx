import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "../../../redux/auth/auth-selectors";

import items from "./navbarMenuItems.json";

import styles from "./navbar-menu.module.scss";

// const getClassName = ({isActive}) => {
//     return isActive ? `${styles.link} ${styles.active}` : styles.link;
// }

const NavbarMenu = () => {
    const isLogin = useSelector(isUserLogin);
    const menuItems = !isLogin ? items.filter(item => !item.private) : items;

    const elements = menuItems.map(({ id, link, text }) => {
        return (
            <li key={id}>
                <NavLink to={link} className={styles.link}>{text}</NavLink>
            </li>
        )
    });

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default NavbarMenu;

/*
class NavbarMenu extends Component {
    state = {
        activeIndex: 0,
    }

    handleClick(index) {
        this.setState({
            activeIndex: index,
        })
    }

    render() {
        const { items } = this.props;
        const {activeIndex} = this.state;
        
        const elements = items.map(({ id, link, text }, index) => {
            const fullClassName = index === activeIndex ? `${styles.link} ${styles.active}` : styles.link;

            return (
                <li key={id}>
                    <a onClick={() => this.handleClick(index)} href={link} className={fullClassName}>{text}</a>
                </li>
            )
        });

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}
*/
