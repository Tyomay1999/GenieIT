import style from "../../Styles/Navbar/index.module.scss"
import Menu from "./menu";
import Image from "next/image";
import logo_small from "../../Assets/Logos/logo_small.svg"


const Navbar = () => {
    return <div
        className={style.main}
    >
        <div className={style.logo_container}>
            <Image src={logo_small} alt="logo"/>
            <div className={style.company_name_wrapper}>
                <h1>| GENIE WEB</h1>
            </div>
        </div>
        <Menu/>
    </div>
}

export default Navbar