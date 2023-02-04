import React from 'react'
import './scss/global.scss'
import './scss/About.scss'
import aboutImage from '../../assets/images/aboutImage.jpg'
import test from './assets/about.json'

const About = () => {

    return (
        <section className="container" id="about">
            <h2 className="section_title">Rólam</h2>

            <div className="grid_wrapper">
                <div className="about_picture" style={{backgroundImage: `url(${aboutImage})`}}>
                </div>
                <div className="about_text">
                    <div dangerouslySetInnerHTML={{ __html: test.text }} />
                </div>
            </div>
        </section>
    )
}

export default About
