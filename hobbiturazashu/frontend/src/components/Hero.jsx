import React from 'react'
import './scss/Hero.scss'
import { Link } from 'react-router-dom';
import bgDummy from '../assets/images/bgDummy.jpg'


const Hero = ({title, image, text, more_link}) => {
    title = title || "Sample Title"
    image = image || bgDummy
    text = text || "Sample text"
    more_link = more_link || "/"
    return (
        <div id="hero" className="hero" style={{backgroundImage: `url(${image})`}}>
            <div className="color-filter">
            <div className="container">
                <h1>{title}</h1>
                <div>
                    <p>{text}</p>
                    <Link to={more_link}>Olvass tovább!</Link>
                </div>
            </div>
            <a className="scroll" href="#latest"></a>
            </div>
        </div>
    )
}

export default Hero
