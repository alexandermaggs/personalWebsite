import React from 'react'
import Tittle from '../Components/Tittle'
import AboutSection from '../Components/AboutSection';
import SkillsSection from '../Components/SkillsSection';
import phone from '../img/phone.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <AboutSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection icon={phone} title={'HTML'} text1={'6 months'} text2={'I have a strong understanding of HTML'}/>
                <SkillsSection icon={phone} title={'CSS/SCSS'} text1={'6 months'} text2={'I have a strong understanding of HTML'}/>
                <SkillsSection icon={phone} title={'Javascript'} text1={'6 months'} text2={'I have a strong understanding of HTML'}/>
                <SkillsSection icon={phone} title={'React.js'} text1={'6 months'} text2={'I have a strong understanding of HTML'}/>
                <SkillsSection icon={phone} title={'Agile Development'} text1={'6 months'} text2={'I have a strong understanding of HTML'}/>
                <SkillsSection icon={phone} title={'Jira'} text1={'6 months'} text2={'I have a strong understanding of HTML'}/>
            </div>

        </div>
    )
}

export default AboutPage;
