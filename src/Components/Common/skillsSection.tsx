import {FC} from "react";
import styles from "../../Styles/Common/skillsSection.module.scss"

interface SkillsI {
    id: number;
    skill: string
}

const skills: SkillsI[] = [
    {
        id: 1,
        skill: "HTML/HTML5",
    },
    {
        id: 2,
        skill: "CSS/CSS3",
    },
    {
        id: 3,
        skill: "SASS/SCSS",
    },
    {
        id: 4,
        skill: "LESS",
    },
    {
        id: 5,
        skill: "Bootstrap",
    },
    {
        id: 6,
        skill: "MaterialUI",
    },
    {
        id: 7,
        skill: "AntDesign",
    },
    {
        id: 8,
        skill: "Tailwind",
    },
    {
        id: 9,
        skill: "SEO",
    },
    {
        id: 10,
        skill: "SMM",
    },
    {
        id: 11,
        skill: "JavaScript",
    },
    {
        id: 12,
        skill: "JQuery",
    },
    {
        id: 13,
        skill: "TypeScript",
    },
    {
        id: 14,
        skill: "RectJS",
    },
    {
        id: 15,
        skill: "ReactNative",
    },
    {
        id: 16,
        skill: "NextJS",
    },
    {
        id: 17,
        skill: "Redux",
    },
    {
        id: 18,
        skill: "NodeJS",
    },
    {
        id: 19,
        skill: "Pug",
    },
    {
        id: 20,
        skill: "EJS",
    },
    {
        id: 21,
        skill: "ExpressJS",
    },
    {
        id: 22,
        skill: "MySQL",
    },
    {
        id: 23,
        skill: "PostgreSQL",
    },
    {
        id: 24,
        skill: "MongoDB",
    }
]


const SkillsSection: FC = () => {
    return <div className={styles.main}>
        {
            skills.map(skill => {
                return <div key={`${skill.id}`} className={styles.box}>
                    <p>#{skill.skill}</p>
                </div>
            })
        }
    </div>
}

export default SkillsSection