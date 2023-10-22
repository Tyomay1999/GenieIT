import styles from './page.module.scss'
import Navbar from "../Components/Navbar";
import Greeting from "../Components/Greeting";


export default function Home() {

  return (
    <main className={styles.main}>
        <Navbar />
        <Greeting />
    </main>
  )
}
