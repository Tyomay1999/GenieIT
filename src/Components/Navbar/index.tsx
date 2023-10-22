import style from "../../Styles/Navbar/index.module.scss"
import Menu from "../Greeting/menu";


const Navbar = () => {
    return <div
        className={style.main}
    >
        <Menu />
    </div>
}

export default Navbar