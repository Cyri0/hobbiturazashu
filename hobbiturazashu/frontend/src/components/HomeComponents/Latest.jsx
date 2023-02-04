import React, {useState, useEffect} from 'react'
import './scss/global.scss'
import './scss/Latest.scss'
import { Link } from 'react-router-dom';
import Card from '../Card'
import {getLatests} from '../../services/HikeService'

const Latest = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        getLatests(3).then((data)=>{
            let cardElements = []

            data.forEach(hike => {
                cardElements.push(
                    <Card 
                        key={hike.id}
                        id={hike.id}
                        title={hike.title}
                        image={hike.image}
                        date_of_hike={hike.date_of_hike} 
                        intro={hike.intro}
                        tags = {hike.tags}
                    />
                )
            });
            setCards(cardElements)
        })
    }, [])



    return (
        <section id="latest" className="container">
            <h2 className="section_title">Legutóbbi túráim</h2>

            <div className="grid_wrapper">
                {cards}
            </div>


            <div className="button_holder">
                <Link to="#" className="more_btn">Még több kaland</Link>
            </div>
        </section>
    )
}

export default Latest
