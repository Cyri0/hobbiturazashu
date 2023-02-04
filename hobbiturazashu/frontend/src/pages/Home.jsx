import React from 'react'
import Hero from '../components/Hero'
import About from '../components/HomeComponents/About'
import Latest from '../components/HomeComponents/Latest'



const Home = () => {
    return (
        <div>
            <Hero
                title="Hobbitúrázás"
                //image=
                text="Lorem ipsum."
                more_link="/"
            />
            <Latest/>
            <About/>
        </div>
    )
}

export default Home
