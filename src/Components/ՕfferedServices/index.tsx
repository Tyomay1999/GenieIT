"use client"
import styles from "../../Styles/OfferedServices/offeredServices.module.scss"
import rowsSVG from "../../Assets/Geometry/rows.svg"
import cubeSVG from "../../Assets/Geometry/cube.svg"
import pyramidSVG from "../../Assets/Geometry/pyramid.svg"
import bollSVG from "../../Assets/Geometry/boll.svg"
import cylinderSVG from "../../Assets/Geometry/cylinder.svg"
import Link from "next/link";
import Image from "next/image";

interface ServicesI {
    icon: string,
    title: string,
    alt: string,
    description: string
}

const services: ServicesI[] = [
    {
        icon: cubeSVG,
        alt: "cube",
        title: "Content Strategy",
        description: "All our content marketing service packages include a custom content strategy"
    },
    {
        icon: pyramidSVG,
        alt: "pyramid",
        title: "Content Development",
        description: "We create some content calendar for your company’s must-share content"
    },
    {
        icon: bollSVG,
        alt: "boll",
        title: "Content Creation",
        description: "Experienced in copy writing and marketing team begins creating content"
    },
    {
        icon: cylinderSVG,
        alt: "cylinder",
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
                services.map((service:ServicesI, index:number) => {
                    return <div key={index} className={styles.service}>
                        <Image
                            src={service.icon}
                            alt={service.alt}
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