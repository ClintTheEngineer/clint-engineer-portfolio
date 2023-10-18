import React from 'react';
import eye from '../images/eyeball.png';
import gh from '../images/github.png';

const username = 'clint'
const domain = `https://easy-fly-umbrella.cyclic.cloud/uploads/${username}`;

const projectPics = {
  pic1 : `${domain}/${username}_image_1.png`,
  pic2 : `${domain}/${username}_image_2.png`,
  pic3 : `${domain}/${username}_image_3.png`,
  pic4 : `${domain}/${username}_image_4.png`,
  pic5 : `${domain}/${username}_image_5.png`,
  pic6 : `${domain}/${username}_image_6.png`,
}

function fetchData() {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', `https://easy-fly-umbrella.cyclic.cloud/${username}/projects`, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        localStorage.setItem('Project Data', JSON.stringify(data));
        resolve(data);
      } else {
        reject('Request failed');
      }
    };

    request.onerror = function () {
      reject('Request failed');
    };

    request.send();
  });
}

const data = await fetchData();

const projectData = {};

data.forEach(item => {
  const { id, live_site_link, github_link, caption } = item;
  const projectId = `id_${id}`;
  const projectLink = `link_${id}`;
  const projectGithubLink = `githubLink_${id}`;
  const projectCaption = `caption_${id}`;

  projectData[projectId] = id;
  projectData[projectLink] = live_site_link;
  projectData[projectGithubLink] = github_link;
  projectData[projectCaption] = caption;
});


const projectsData = [
  {
    id: projectData.id_1,
    image: projectPics.pic1,
    webpageLink: projectData.link_1,
    githubLink: projectData.githubLink_1,
    caption: projectData.caption_1
  },
  {
    id: projectData.id_2,
    image: projectPics.pic2,
    webpageLink: projectData.link_2,
    githubLink: projectData.githubLink_2,
    caption: projectData.caption_2
  },
  {
    id: projectData.id_3,
    image: projectPics.pic3,
    webpageLink: projectData.link_3,
    githubLink: projectData.githubLink_3,
    caption: projectData.caption_3
  },
  {
    id: projectData.id_4,
    image: projectPics.pic4,
    webpageLink: projectData.link_4,
    githubLink: projectData.githubLink_4,
    caption: projectData.caption_4
  },
  {
    id: projectData.id_5,
    image: projectPics.pic5,
    webpageLink: projectData.link_5,
    githubLink: projectData.githubLink_5,
    caption: projectData.caption_5
  },
  {
    id: projectData.id_6,
    image: projectPics.pic6,
    webpageLink: projectData.link_6,
    githubLink: projectData.githubLink_6,
    caption: projectData.caption_6
  }

];

const Projects = () => {
  return (
    <>
      <div id='projects'>
      <article id="projects-header">
        <h2><span>Projects</span></h2>
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
            <div className='overlay'><p className='caption' id={`overlay${project.id}`}>{project.caption}</p></div>
          </div>
        ))}
      </section>
      </div>
    </>
  );
};

export default Projects;