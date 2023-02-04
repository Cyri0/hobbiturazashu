import React from 'react'
import { Link } from 'react-router-dom';
import bgDummy from '../assets/images/bgDummy.jpg'

import './scss/Card.scss'

const Card = ({
    id,
    title,
    image,
    date_of_hike,
    intro,
    tags,
  }) => {
    id = id || 0
    title = title || "Sample Title";
    image = image || bgDummy;
    date_of_hike = date_of_hike || "2022-12-29";
    intro = intro || "Lorem ipsum.";
    
    tags = tags || [
      { id: 1, name: "dummy" },
      { id: 2, name: "dummy2" },
    ];

    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    date_of_hike = new Date(date_of_hike).toLocaleDateString('hu', options)

    let tagDOMs = []

    tags.forEach((value, index, array)=>{
      tagDOMs.push(
      <Link className="tag" to="/" key={index}>{value.name}</Link>
      )
    })

    let targetLink = `/tura/${id}`

    return (
        <div className="card">
            <div className="card-image" style={{backgroundImage: `url(${image})`}}></div>
            <div className="card-content">
              <h2>{title}</h2>
              <h3>{date_of_hike}</h3>
              {tagDOMs}
              <div className="intro">{intro}</div>
              <div className="readMoreHolder">
                <Link className="readMore" to={targetLink}>Tovább...</Link>
              </div>
            </div>

        </div>
    )
}

export default Card