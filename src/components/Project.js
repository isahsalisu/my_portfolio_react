import React from 'react'
//import './projects.css'

// DO NOT USE THE IMAGES IN PRODUCTION



const Project = (props) => {
    const {id, image, title, github, demo} = props.project
  return (
    <article key={id} className='projects__item'>
        <div className="projects__item-image">
        <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="projects__item-cta">
        <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
        <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live link</a>
        </div>
    </article>
  )
}

export default Project