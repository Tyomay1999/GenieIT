import styles from './page.module.scss'
import Navbar from "../Components/Navbar";
import Greeting from "../Components/Greeting";
import OfferedServices from "../Components/ՕfferedServices";
import AboutUs from "../Components/AboutUs";
import SkillsSection from "../Components/Common/skillsSection";


export default function Home() {

    return (
        <main className={styles.main}>
            <Navbar/>
            <Greeting/>
            <OfferedServices/>
            <AboutUs/>
            <SkillsSection />
        </main>
    )
}
