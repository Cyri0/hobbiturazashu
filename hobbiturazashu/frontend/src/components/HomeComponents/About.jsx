import React from 'react'
import './scss/global.scss'
import './scss/About.scss'
import aboutImage from '../../assets/images/aboutImage.jpg'


const About = () => {

    return (
        <section className="container" id="about">
            <h2 className="section_title">Rólam</h2>

            <div className="grid_wrapper">
                <div className="about_picture" style={{backgroundImage: `url(${aboutImage})`}}>
                </div>
                <div className="about_text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Ridiculus mus mauris vitae ultricies. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.
                    </p>
                    <p>
                    Odio ut enim blandit volutpat maecenas volutpat. Ut venenatis tellus in metus vulputate eu scelerisque felis.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
