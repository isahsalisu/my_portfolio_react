// import React from 'react'
// //import './projects.css'
// import ProjectImage1a from '../assets/images/ProjectImage1a.png'
// import ProjectImage2a from '../assets/images/ProjectImage2a.png'
// import ProjectImage3a from '../assets/images/ProjectImage3a.png'
// import ProjectImage4a from '../assets/images/ProjectImage4a.png'
// import ProjectImage5a from '../assets/images/ProjectImage5a.png'
// import ProjectImage6a from '../assets/images/ProjectImage6a.png'
// import Project from '../components/Project'


// const data = [
//   {
//     id: 1,
//     image: ProjectImage1a,
//     title: 'work-day-scheduler',
//     github: 'https://github.com/isahsalisu/work-day-scheduler.git',
//     demo: ' https://isahsalisu.github.io/work-day-scheduler/'
//   },
//   {
//     id: 2,
//     image: ProjectImage2a,
//     title: 'team_profile_generator',
//     github: 'https://github.com/isahsalisu/team_profile_generator.git',
//     demo: 'https://isahsalisu.github.io/team_profile_generator/'
//   },

//   {
//     id: 3,
//     image: ProjectImage3a,
//     title: 'readme_generator_1',
//     github: 'https://github.com/isahsalisu/readme_generator_1.git',
//     demo: ' https://isahsalisu.github.io/readme_generator_1/'
//   },
//   {
//     id: 4,
//     image: ProjectImage4a,
//     title: 'password-generator',
//     github: 'https://github.com/isahsalisu/password-generator.git',
//     demo: ' https://isahsalisu.github.io/password-generator/'
//   },
//   {
//     id: 5,
//     image: ProjectImage5a,
//     title: 'song-search-app',
//     github: 'https://github.com/isahsalisu/song-search-app.git',
//     demo: 'https://isahsalisu.github.io/song-search-app/'
//   },
//   {
//     id: 6,
//     image: ProjectImage6a,
//     title: 'Bootstrap-portfolio',
//     github: 'https://github.com/isahsalisu/Bootstrap-portfolio.git',
//     demo: ' https://isahsalisu.github.io/Bootstrap-portfolio/'
//   }

 
// ]


// const Projects = () => {
//   return (
//     <section className="container" id='projects'>
//       <h5>My Recent Work</h5>
//       <h2>projects</h2>

//       <div className="container projects__container">
//         {
//           data.map((project) => {
//             return (
//              <Project project={project} />
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default Projects

import React from 'react';
import ProjectImage1a from '../assets/images/ProjectImage1a.png';
import ProjectImage2a from '../assets/images/ProjectImage2a.png';
import ProjectImage3a from '../assets/images/ProjectImage3a.png';
import ProjectImage4a from '../assets/images/ProjectImage4a.png';
import ProjectImage5a from '../assets/images/ProjectImage5a.png';
import ProjectImage6a from '../assets/images/ProjectImage6a.png';
import Project from '../components/Project';

const data = [
  {
    id: 1,
    image: ProjectImage1a,
    title: 'work-day-scheduler',
    github: 'https://github.com/isahsalisu/work-day-scheduler.git',
    demo: ' https://isahsalisu.github.io/work-day-scheduler/'
  },
  {
    id: 2,
    image: ProjectImage2a,
    title: 'team_profile_generator',
    github: 'https://github.com/isahsalisu/team_profile_generator.git',
    demo: 'https://isahsalisu.github.io/team_profile_generator/'
  },
  {
    id: 3,
    image: ProjectImage3a,
    title: 'readme_generator_1',
    github: 'https://github.com/isahsalisu/readme_generator_1.git',
    demo: ' https://isahsalisu.github.io/readme_generator_1/'
  },
  {
    id: 4,
    image: ProjectImage4a,
    title: 'password-generator',
    github: 'https://github.com/isahsalisu/password-generator.git',
    demo: ' https://isahsalisu.github.io/password-generator/'
  },
  {
    id: 5,
    image: ProjectImage5a,
    title: 'song-search-app',
    github: 'https://github.com/isahsalisu/song-search-app.git',
    demo: 'https://isahsalisu.github.io/song-search-app/'
  },
  {
    id: 6,
    image: ProjectImage6a,
    title: 'Bootstrap-portfolio',
    github: 'https://github.com/isahsalisu/Bootstrap-portfolio.git',
    demo: ' https://isahsalisu.github.io/Bootstrap-portfolio/'
  }
];

const Projects = () => {
  return (
    <section className="container" id='projects'>
      <h5>My Recent Work</h5>
      <h2>projects</h2>

      <div className="container projects__container">
        {data.map((project) => {
          return (
            <Project key={project.id} project={project} />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
