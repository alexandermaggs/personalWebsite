import React from 'react'

function SkillsCard(props) {
    return (
        <div className="skills-card">
                <div className="img-container">
                    <img src={props.img} class="card-image" alt=""/>
                </div>
                <div className="desc-container">
                    <h1 className="card-title">{props.title}</h1>
                    <p className="experience">{props.experience}</p>
                    <p className="card-desc">{props.desc}</p>
                </div>
            
        </div>
    )
}

export default SkillsCard;
