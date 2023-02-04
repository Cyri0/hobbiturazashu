import React from 'react'
import './scss/Footer.scss'
import { Link } from 'react-router-dom';
import facebook from '../assets/icons/square-facebook.svg'
import envelope from '../assets/icons/envelope-solid.svg'
import instagram from '../assets/icons/square-instagram.svg'


const Footer = () => {
    return (
        <footer>
             <div className="contacts">
                 <a href="#"><img src={envelope} alt="envelope" /></a>
                 <a href="#"><img src={facebook} alt="facebook" /></a>
                 <a href="#"><img src={instagram} alt="instagram" /></a>
             </div>
             <div>
                 <p><a href="#">Danivagyokbt</a></p>
             </div>
        </footer>
    )
}

export default Footer
