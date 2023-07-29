import faAngular from '../../assets/brands/angular.svg';
import faJs from '../../assets/brands/jslogo.png';
import faJava from '../../assets/brands/java.png';
import faReact from '../../assets/brands/react-logo.png';
import faPython from '../../assets/brands/python.png';
import faHtml5 from '../../assets/brands/htmllogo.png';
import faCss3 from '../../assets/brands/css.png';
import faSass from '../../assets/brands/sass.png';
import faGit from '../../assets/brands/gitlogo.png';
import faDocker from '../../assets/brands/docker.png';
import faJenkins from '../../assets/brands/jenkins.png';
import faNodeJs from '../../assets/brands/nodejs.png';
import faSpring from '../../assets/brands/spring.png';
import faTs from '../../assets/brands/ts.png';
import faTensorflow from '../../assets/brands/tensorflow.png';
import faC from '../../assets/brands/C.png';
import faMongo from '../../assets/brands/mongo.png';
import faBitbucket from '../../assets/brands/bitbucket.png';
import faStorybook from '../../assets/brands/storybook.png';
import './skills.scss';
export default function Skills() {
    const skills = [
        {
            name: 'Angular',
            icon: faAngular,
        },
        {
            name:'Javascript',
            icon: faJs
        },
        {
            name: 'Typescript',
            icon: faTs
        },
        {
            name: 'Java',
            icon: faJava,
        },
        {
            name: 'C',
            icon: faC
        },
        {
            name: 'Spring Boot',
            icon: faSpring
        },
        {
            name: 'React',
            icon: faReact
        },
        {
            name: 'Python',
            icon: faPython
        },
        {
            name: 'HTML5',
            icon: faHtml5,
        },
        {
            name: 'CSS3',
            icon: faCss3,
        },
        {
            name: 'SaSS',
            icon: faSass
        },
        {
            name:'Storybook',
            icon: faStorybook
        },
        {
            name:'Nodejs',
            icon: faNodeJs
        },
        {
            name: 'MongoDB',
            icon: faMongo
        },
        {
            name: 'Git',
            icon: faGit
        },
        {
            name:'Bitbucket',
            icon: faBitbucket
        },
        {
            name:'Docker',
            icon: faDocker
        },
        {
            name: 'Jenkins',
            icon: faJenkins
        },
        {
            name: 'Tensorflow',
            icon: faTensorflow
        }

    ]
    return (
        <div className="skills-container">
            {skills && skills.map(skill=>{
                return (
                    <div key={skill.name} className='skill-item'>
                    <img src={skill.icon} alt=''></img>
                    <div className='skill-name'>{skill.name}</div>
                    </div>
                )
            })}
        </div>
    );
}