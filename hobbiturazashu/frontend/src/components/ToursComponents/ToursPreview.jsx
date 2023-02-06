import React, {useState, useEffect} from 'react'
import './scss/ToursPreview.scss'
import bgDummy from '../../assets/images/bgDummy.jpg'

const ToursPreview = ({tours}) => {
  const [tourElements, setTourElements] = useState(<div className='loading'>Loading...</div>)

  useEffect(()=>{
    let newTourElements = []
    tours.forEach((tour, key)=>{
        newTourElements.push(tourBuilder(tour, key))
    })
    setTourElements(newTourElements)
  }, [tours])

  return (
    <div className="container tours-preview">{tourElements}</div>
  )
}

const tourBuilder = (tour, key) => {

    const tourCardStyle = {
        backgroundImage: `url(${tour.image})`
    }    

    return(<div className="tourCard" style={tourCardStyle} key={key}>
         <div className='bgColorizer'>
            <h2>{tour.title}</h2>
            <p>{tour.intro}</p>
            <div><a href={"/tura/"+tour.id}>Tovább...</a></div>
         </div>
    </div>
    )
}

export default ToursPreview