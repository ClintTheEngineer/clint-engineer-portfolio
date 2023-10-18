import csharp from '../images/c-sharp-logo.png';
import postgres from '../images/postgresql-logo.png';
import python from '../images/python-logo.png';
import react from '../images/react_logo.png';
import nodejs from '../images/nodejs-logo.png';
import electron from '../images/electron-logo.png'

const TechStack = () => {

    return (
        <>
        <div id='tech-stack'>
        <h2 id='techstack-header'><span>Tech Stack</span></h2>
        <section id='image-container'>
        <img src={csharp} alt='C-Sharp'/>
        <img src={postgres} alt='Postgres logo'/>
        <img src={python} alt='Python logo' />
        <img src={react} alt='React logo' />
        <img src={nodejs} alt='NodeJs logo' />
        <img src={electron} alt='Electron' />
        </section>
        </div>
        </>
    )
}

export default TechStack;