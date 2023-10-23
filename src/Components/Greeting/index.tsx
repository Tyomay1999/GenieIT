import background_image_left_side from "../../Assets/Greeting/backgrount_ligth_gray.png"
import business_photo_left_side from "../../Assets/Greeting/Business_photo_SVG 1.svg"
import styles from "../../Styles/Greeting/index.module.scss"
import Image from "next/image";

const Greeting = () => {
    return <div
        className={styles.main}>
        <div
            className={styles.greeting_wrapper}
        >
            <h1>
                E-Learning <br/>
                Platform
            </h1>
            <p>
                Newts E-Learning platform is here to <br/>
                help you be a master of any of your CS <br/>
                desired career course.
            </p>
            <button
            >
                Contact us
            </button>
        </div>
        <Image
            className={styles.background_image_left_side}
            src={background_image_left_side}
            alt="background left side"
        />
        <Image
            className={styles.business_photo_left_side}
            src={business_photo_left_side}
            alt="background left side"
        />
    </div>
}


export default Greeting;