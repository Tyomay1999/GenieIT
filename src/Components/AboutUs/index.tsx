import React from 'react'
import styles from '../../Styles/AboutUs/aboutUs.module.scss'
import Image from "next/image";
import web_devices from "../../Assets/AboutUs/web_devices.svg"
import {ContactUsBtn} from "../Common/buttons";

const AboutUs = () => {
    return <div className={styles.main}>
        <div className={styles.image_container}>
            <Image src={web_devices} alt="web devices" />
        </div>
        <div className={styles.info_container}>
            <h1>
                About us
            </h1>
            <p>
                We put your investments in new highly
                remunerative innovative projects,
                which offers great returns along.
                Today our company has a professional
                team to develop a business.
                We are constantly diversifying our investment
                portfolio and building stronger connections
                worldwide.
            </p>
            <ContactUsBtn />
        </div>
    </div>
}

export default AboutUs