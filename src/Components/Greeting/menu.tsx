import styles from "../../Styles/Navbar/menu.module.scss"


const Menu = () => {
    return <div className={styles.main}>
        <ul className={styles.menu} >
            <li>Main</li>
            <li>About</li>
            <li>For Business</li>
            <li>Careers</li>
            <li>Contacts</li>
            <li>
                <i className="bi bi-search"/>
            </li>
        </ul>
        <button>Join Us</button>
    </div>
}

export default Menu