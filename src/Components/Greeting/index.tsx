import background_image_left_side from "../../Assets/Greeting/backgrount_ligth_gray.png"
import styles from "../../Styles/Greeting/index.module.scss"
import Image from "next/image";

const Greeting = () => {
    return <div className={styles.main}>
        <Image
            className={styles.background_image_left_side}
            src={background_image_left_side}
            alt="background left side"
        />
    </div>
}



export default Greeting;