import React, { useState } from 'react';
import { useEffect } from "react";
import { projectData } from './Data';
import { projectNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [item, setItem] = useState({name: "All Data"});
    const [project, setProject] = useState([]);
    const [active, setActive] = useState(0);
    
    useEffect(() => {
        if(item.name === "All Data") {
            setProject(projectData);
        }
        else {
            const newProject = projectData.filter((project) => {
                return project.category === item.name;
            });
            setProject(newProject);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };
    return (
        <div>
            <div className="work__filters">
            {projectNav.map((item, index) => {
                return ( 
                    <span 
                    onClick={(e) => {
                        handleClick(e, index);
                    }}
                     className={`${active === index ? "active-work" : ""} work__item`}
                     key={index}>
                        {item.name}
                    </span>
                );
            })}
            </div>

            <div className="work__container container grid">
                {project.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works