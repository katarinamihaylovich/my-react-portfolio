import Project from "./Project";
import React, {useState} from "react";


function Portfolio () {
    const [ projects ] = useState([
        {
            name: "Film Buzz",
            description: "API app",
            deployedLink: "https://katarinamihaylovich.github.io/film-buzz/",
            gitHubLink: "https://github.com/katarinamihaylovich/film-buzz",
            image: "filmbuzzss.png"
        },
        {
            name: "Note Taker",
            description: "Notes app",
            deployedLink: "https://scented-endurable-red.glitch.me",
            gitHubLink: "https://github.com/katarinamihaylovich/note-taker",
            image: "notetakerss.png"
        },
        {
            name: "Password Generator",
            description: "App that generates random passwords",
            deployedLink: "https://katarinamihaylovich.github.io/password-generator/",
            gitHubLink: "https://github.com/katarinamihaylovich/password-generator",
            image: "passwordgeneratorss.png"
        },

    ])
    return (
        <>
            <div className="container-fluid flex-row">
                {projects.map((project, index ) => (
                    <Project project={project} key={"project" + index} />
                ))} 
            </div>
        </>
    )
}

export default Portfolio;