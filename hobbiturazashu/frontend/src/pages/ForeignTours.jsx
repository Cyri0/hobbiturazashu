import React, {useState} from 'react'

import Hero from '../components/Hero'


const ForeignTours = () => {
    const [tours, setTours] = useState(
        [ {"title":"","image":"", "text":"Példa túra", "link":""} ]
    )


    return (
        <section>
            <Hero
                title="Külföldi túrák"
                image={tours[0].image}
                text={tours[0].text}
                more_link={tours[0].link}
            />
        </section>
    )
}

export default ForeignTours
