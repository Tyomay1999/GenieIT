"use client"
import styles from "../../Styles/Navbar/menu.module.scss"
import Image from "next/image";
import burger_menu from "../../Assets/Menu/burger_menu.svg"
import {useState} from "react";

const BurgerMenu = () => {
    const [show_menu, setMenuState] = useState<boolean>(false)


    const handleClick = () => {
        setMenuState(prev => !prev)
    }

    return <div className={styles.burger_menu_container}>
        <div
            className={styles.burger_menu_img}
            onClick={handleClick}
        >
            <Image
                src={burger_menu}
                alt="Menu"
            />
        </div>
        <div className={ show_menu ?  styles.menu_wrapper_show : styles.menu_wrapper_hide}>
            <ul className={styles.menu}>
                <li>Main</li>
                <li>About</li>
                <li>For Business</li>
                <li>Careers</li>
                <li>Contacts</li>
                <li>Join us</li>
                {/*<li>*/}
                {/*    <i className="bi bi-search"/>*/}
                {/*</li>*/}
            </ul>
        </div>
    </div>
}


const Menu = () => {
    return <div className={styles.main}>
        <ul className={styles.menu}>
            <li>Main</li>
            <li>About</li>
            <li>For Business</li>
            <li>Careers</li>
            <li>Contacts</li>
            <li>
                <i className="bi bi-search"/>
            </li>
        </ul>
        <button
            onClick={() => console.log("react")}
            className={styles.joinUs}
        >Join Us
        </button>
        <BurgerMenu />
    </div>
}

export default Menu