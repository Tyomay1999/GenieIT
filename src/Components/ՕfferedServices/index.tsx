"use client"
import styles from "../../Styles/OfferedServices/offeredServices.module.scss"
import rowsSVG from "../../Assets/Geometry/rows.svg"
import cubeSVG from "../../Assets/Geometry/cube.svg"
import piramidSVG from "../../Assets/Geometry/piramid.svg"
import bollSVG from "../../Assets/Geometry/boll.svg"
import cylinderSVG from "../../Assets/Geometry/cylinder.svg"
import Link from "next/link";
import Image from "next/image";

interface ServicesI {
    icon: string,
    title: string,
    description: string
}

const services: ServicesI[] = [
    {
        icon: cubeSVG,
        title: "Content Strategy",
        description: "All our content marketing service packages include a custom content strategy"
    },
    {
        icon: piramidSVG,
        title: "Content Development",
        description: "We create some content calendar for your company’s must-share content"
    },
    {
        icon: bollSVG,
        title: "Content Creation",
        description: "Experienced in copywriting and marketing team begins creating content"
    },
    {
        icon: cylinderSVG,
        title: "Content Optimization",
        description: "Your content marketing management services also include SEO"
    }
]

const OfferedServices = () => {
    return <div
        className={styles.main}
    >
        <div className={styles.info_block}>
            <h1>
                What services
            </h1>
            <h1>
                do we offer?
            </h1>
            <div>
                <p>
                    These are some of the services that you will get if
                    you cooperate with us, of course there are many more.
                </p>
            </div>
            <Link href="/" className={styles.link}>See more</Link>
        </div>
        <div className={styles.services}>
            {/*<div className={styles.elips} />*/}
            {
                services.map(service => {
                    return <div className={styles.service}>
                        <Image
                            src={service.icon}
                            alt="cube"
                        />
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                    </div>
                })
            }

        </div>
        <Image
            className={styles.rows}
            src={rowsSVG}
            alt="Rows"
        />
    </div>
}

export default OfferedServices