import {FC} from "react";
import styles from "../../Styles/Common/skillsSection.module.scss"

interface SkillsI {
    skill: string
}

const skills: SkillsI[] = [
    {
        skill: "HTML/HTML5",
    },
    {
        skill: "CSS/CSS3",
    },
    {
        skill: "SASS/SCSS",
    },
    {
        skill: "LESS",
    },
    {
        skill: "Bootstrap",
    },
    {
        skill: "MaterialUI",
    },
    {
        skill: "AntDesign",
    },
    {
        skill: "Tailwind",
    },
    {
        skill: "Styled Components",
    },
    {
        skill: "SEO",
    },
    {
        skill: "SMM",
    },
    {
        skill: "JavaScript( ES6+ )",
    },
    {
        skill: "JQuery",
    },
    {
        skill: "TypeScript",
    },
    {
        skill: "Jest",
    },
    {
        skill: "PWA",
    },
    {
        skill: "RectJS",
    },
    {
        skill: "ReactNative",
    },
    {
        skill: "NextJS",
    },
    {
        skill: "Redux(Thunk/Saga)",
    },
    {
        skill: "Zustand",
    },
    {
        skill: "NodeJS",
    },
    {
        skill: "Nest JS",
    },
    {
        skill: "Pug",
    },
    {
        skill: "EJS",
    },
    {
        skill: "ExpressJS",
    },
    {
        skill: "MySQL",
    },
    {
        skill: "PostgreSQL",
    },
    {
        skill: "MongoDB",
    },
    {
        skill: "GitHub/GitLab",
    },
    {
        skill: "Bitbucket",
    },
    {
        skill: "Jira",
    }
]


const SkillsSection: FC = () => {
    return <div className={styles.main}>
        {
            skills.map((skill,index) => {
                return <div key={`${index}`} className={styles.box}>
                    <p><span>#</span>{skill.skill}</p>
                </div>
            })
        }
    </div>
}

export default SkillsSection