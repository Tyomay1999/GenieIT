import style from "../../Styles/Navbar/index.module.scss"
import Menu from "./menu";


const Navbar = () => {
    return <div
        className={style.main}
    >
        <div className={style.logo_container}>

        </div>
        <Menu />
    </div>
}

export default Navbar