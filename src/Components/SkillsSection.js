import React from 'react'

function SkillsSection({icon, text1, text2, title}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <img src={icon} alt=""/>
                <h6>{title}</h6>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    )
}

export default SkillsSection;
