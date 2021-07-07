import React from 'react';
import SkillsCard from './SkillsCard';
import html from '../img/html-5.svg';
import css from '../img/css-3.svg';
import js from '../img/javascript.svg';
import react from '../img/react.svg';
import agile from '../img/agile.svg';
import java from '../img/java.svg';

function SkillsSection() {
    return (
        <div className="skills-section">
            <SkillsCard
                img={html}
                title="HTML"
                experience="I have 6 months experience"
                desc="I have a strong foundation of HTML knowledge"
                 />
                 <SkillsCard
                img={css}
                title="CSS/SCSS"
                experience="I have 6 months experience"
                desc="I have a strong foundation of CSS knowledge"
                 />
                 <SkillsCard
                img={js}
                title="Javascript"
                experience="I have 6 months experience"
                desc="I have a strong foundation of JS knowledge"
                 />
                 <SkillsCard
                img={react}
                title="React.js"
                experience="I have 6 months experience"
                desc="I have a strong foundation of React knowledge"
                 />
                 <SkillsCard
                img={agile}
                title="Agile development"
                experience="I have 6 months experience"
                desc="I have a strong foundation of working in Jira and agile practices"
                 />
                 <SkillsCard
                img={java}
                title="Java"
                experience="I have 6 months experience"
                desc="I have a strong foundation of programming in Java and have used it a lot at University"
                 />
        </div>
    )
}

export default SkillsSection;