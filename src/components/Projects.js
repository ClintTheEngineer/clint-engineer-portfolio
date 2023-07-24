import React from 'react';
import eye from '../images/eyeball.png';
import gh from '../images/github.png';
import pic1 from '../images/pic_1.png'
import pic2 from '../images/pic_2.png'
import pic3 from '../images/pic_3.png'
import pic4 from '../images/pic_4.png'
import pic5 from '../images/pic_5.png'
import pic6 from '../images/pic_6.png'


const projectsData = [
  {
    id: 1,
    image: pic1,
    webpageLink: 'https://upsidehoops.com',
    githubLink: 'https://github.com/ClintTheEngineer/wall-of-fame-react',
  },
  {
    id: 2,
    image: pic2,
    webpageLink: 'https://cander-js-quiz.netlify.app',
    githubLink: 'https://github.com/ClintTheEngineer/wall-of-fame-react',
  },
  {
    id: 3,
    image: pic3,
    webpageLink: 'https://javascript-calendar.netlify.app',
    githubLink: 'https://github.com/ClintTheEngineer/javascript-test-app',
  },
  {
    id: 4,
    image: pic4,
    webpageLink: 'https://nba-draft-lottery.netlify.app',
    githubLink: 'https://github.com/ClintTheEngineer/javascript-calendar',
  },
  {
    id: 5,
    image: pic5,
    webpageLink: 'https://upside-social.netlify.com',
    githubLink: 'https://github.com/ClintTheEngineer/nba-draft-lottery',
  },
  {
    id: 6,
    image: pic6,
    webpageLink: 'https://loveatfirstbite.net',
    githubLink: 'https://github.com/ClintTheEngineerLove-at-First-Bite',
  }

];

const Projects = () => {
  return (
    <>
      <article id="Projects">
        <h2>Projects</h2>
      </article>
      <section id="project-squares">
        {projectsData.map((project) => (
          <div key={project.id} className='eye' id={`project-${project.id}`}>
            <img src={project.image} className='project-item' alt={`pic${project.id}`} />
            <a href={project.webpageLink} target='_blank' rel='noreferrer' title='View Webpage'>
              <img id={`eye${project.id}`} className='eye-icon' src={eye} alt='View Webpage' />
            </a>
            <a href={project.githubLink} target='_blank' rel='noreferrer' title='View Source Code'>
              <img className='github-icon' id="github" src={gh} alt='GitHub' />
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
