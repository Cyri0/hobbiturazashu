import React from 'react'
import './scss/MainImage.scss'

const MainImage = ({image}) => {
    return (
        <div className="mainimage" style={{backgroundImage: `url(${image})`}}>
        </div>
    )
}

export default MainImage
