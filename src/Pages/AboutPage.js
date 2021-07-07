import React from 'react'
import Tittle from '../Components/Tittle'
import AboutSection from '../Components/AboutSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <section id="about">
            <AboutSection />
            </section>
            <Tittle title={'My Skills'} span={'My Skills'} />
            <section id="skills">
            <SkillsSection />
            </section>
        </div>
    )
}

export default AboutPage;
