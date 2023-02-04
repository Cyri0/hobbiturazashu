import React, {useState, useEffect} from 'react'

import Hero from '../components/Hero'
import About from '../components/HomeComponents/About'
import Latest from '../components/HomeComponents/Latest'
import {getLatests} from '../services/HikeService'


const Home = () => {
    const [heroData, setHeroData] = useState({
        id:0,
        image:undefined,
        intro: "",
    })

    useEffect(()=>{
        getLatests(1).then((data)=>{
            setHeroData(data[0])
        })
    }, [])

    return (
        <div>
            <Hero
                title="Hobbitúrázás"
                image={heroData.image}
                text={heroData.intro}
                more_link={`/tura/${heroData.id}`}
            />
            <Latest/>
            <About/>
        </div>
    )
}

export default Home
