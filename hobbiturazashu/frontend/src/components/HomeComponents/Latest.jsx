import React from 'react'
import './scss/global.scss'
import './scss/Latest.scss'
import { Link } from 'react-router-dom';
import Card from '../Card'

const Latest = () => {
    return (
        <section id="latest" className="container">
            <h2 className="section_title">Legutóbbi túráim</h2>

            <div className="grid_wrapper">
                <Card />
                <Card />
                <Card />
            </div>


            <div className="button_holder">
                <Link to="#" className="more_btn">Még több kaland</Link>
            </div>
        </section>
    )
}

export default Latest
