import React from "react";
import "./skills.css";
import Engineer from "./Engineer";
import Analyst from "./Analyst";
import Scientist from "./Scientist";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Engineer />
                <Analyst />
                <Scientist />
            </div>
        </section>
    );
};

export default Skills