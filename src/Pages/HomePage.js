import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span>Alexander Maggs</span>
                </h1>
                <p className="hero-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Porro esse consequuntur odio ratione voluptatum reiciendis iure dignissimos culpa, 
                    fugit excepturi suscipit, in voluptatem laudantium molestias quis, expedita debitis nisi illo?
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;