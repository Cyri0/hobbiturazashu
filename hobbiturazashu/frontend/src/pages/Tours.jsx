import React, {useState, useEffect} from 'react'
import Hero from '../components/Hero'
import {getByCategory} from '../services/HikeService'
import ToursPreview from '../components/ToursComponents/ToursPreview'

const Tours = ({heroTitle, categoryName}) => {
    const [tours, setTours] = useState(
        [ {"title":"","image":"", "intro":"Példa túra", "link":""} ]
    )

    useEffect(()=>{
        getByCategory(categoryName).then((data)=>{
            setTours(data)
        })
    }, [heroTitle])

    return (
        <section>
            <Hero
                title={heroTitle}
                image={tours[0].image}
                text={tours[0].intro}
                more_link={'/tura/'+tours[0].id}
            />
            <ToursPreview tours = {tours} />
        </section>
    )
}

export default Tours
