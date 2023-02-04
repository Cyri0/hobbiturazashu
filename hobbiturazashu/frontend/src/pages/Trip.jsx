import React, {useState, useEffect} from "react";
import MainImage from "../components/MainImage";
import bgDummy from "../assets/images/bgDummy.jpg";
import { Link } from 'react-router-dom';
import { getHikeById } from '../services/HikeService'
import { useParams } from 'react-router-dom'

import "./scss/Trip.scss";

const Trip = ({
}) => {

  const params = useParams()
  const [tripData, setTripData] = useState(
    { id : 0,
      title : "Sample Title",
      category : "hazai",
      image : bgDummy,
      date_of_hike : "2022-12-29",
      intro : "Lorem ipsum.",
      distance_in_km : 10,
      altitude_in_m : 100,
      description : "<b>Lorem ipsum</b>",
    }
  )
  const [created, setCreated] = useState()
  const [modified, setModified] = useState()
  const [tags, setTags] = useState([])

  const options = { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };

  const updateDates = () => {
    setCreated(new Date(tripData.created).toLocaleDateString('hu', options))
    setModified(new Date(tripData.modified).toLocaleDateString('hu', options))
  }

  const updateTags = () => {
    let tagDOMs = []
    tripData.tags.forEach( (tag, index, array) => {
      tagDOMs.push(
        <Link className="tag" key={index} to={"/searchbytag/" + tag.id}>{tag.name}</Link>
      )
    })
    setTags(tagDOMs)
  }

  useEffect( () => {
    getHikeById(params.id).then((data)=>{
      console.log(data)
      setTripData(data)
    })
  }, [])

  useEffect( () => {
    if(tripData.tags){
      updateDates()
      updateTags()
    }
  }, [tripData])

  return (
    <section className="trip">
      <MainImage image = {tripData.image}/>
      <div className="container content">
        <h1>{tripData.title}</h1>
        <h2 className="date">{tripData.date_of_hike}</h2>
        {tags}
        <table>
            <tbody>
            <tr key="distance">
                <th>Táv:</th>
                <td>{tripData.distance_in_km} km</td>
            </tr>
            <tr key="altitude">
                <th>Szint:</th>
                <td>{tripData.altitude_in_m} m</td>
            </tr>
            </tbody>
        </table>
        <div>
            <div className="intro">
            {tripData.intro}
            </div>

            <div dangerouslySetInnerHTML={{ __html: tripData.description }} />

            <div className="dateCreated">Létrehozva: {created}</div>
            <div className="dateModified"> { created === modified ? "" : "Módosítva: " + modified }</div>
        </div>

      </div>
    </section>
  );
};

export default Trip;
