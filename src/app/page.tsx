import styles from './page.module.scss'
import Navbar from "../Components/Navbar";
import Greeting from "../Components/Greeting";
import OfferedServices from "../Components/ՕfferedServices/index";


export default function Home() {

  return (
    <main className={styles.main}>
        <Navbar />
        <Greeting />
        <OfferedServices />
    </main>
  )
}
