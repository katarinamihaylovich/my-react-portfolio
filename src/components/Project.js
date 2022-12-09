import React from 'react';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project ({ project }) {
    const { name, description, deployedLink, gitHubLink, image } = project;

    return (
        <>
            <div className='project'>
                <img src={require(`../assets/${image}`)} alt={removeHyphensAndCapitalize(name)} className='project-bg'/>
            </div>
            <div className=''>
                <a href={deployedLink}>{name}</a>{' '}
                <a href={gitHubLink}>GitHub</a>
                <p>Description: {description}</p>
            </div>
        </>
    )
}

export default Project;