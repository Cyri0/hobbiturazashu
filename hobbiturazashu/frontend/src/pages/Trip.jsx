import React from "react";
import MainImage from "../components/MainImage";
import bgDummy from "../assets/images/bgDummy.jpg";
import { Link } from 'react-router-dom';

import "./scss/Trip.scss";

const Trip = ({
  id,
  title,
  category,
  image,
  date_of_hike,
  intro,
  distance_in_km,
  altitude_in_m,
  description,
  tags,
  created,
  modified,
}) => {
  id = id || 0
  title = title || "Sample Title";
  category = category || "hazai";
  image = image || bgDummy;
  date_of_hike = date_of_hike || "2022-12-29";
  intro = intro || "Lorem ipsum.";
  distance_in_km = distance_in_km || 10;
  altitude_in_m = altitude_in_m || 100;
  description = description || "<b>Lorem ipsum</b>";
  tags = tags || [
    { id: 1, name: "dummy" },
    { id: 2, name: "dummy2" },
  ];
  created = created || "2022-12-29T09:29:08.066240Z";
  modified = modified || "2022-12-29T09:29:08.066240Z";

  const options = { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };

  created = new Date(created).toLocaleDateString('hu', options)
  modified = new Date(modified).toLocaleDateString('hu', options)

  let tagDOMs = []

  tags.forEach( (tag, index, array) => {
      tagDOMs.push(
        <Link className="tag" key={index} to={"/searchbytag/" + tag.id}>{tag.name}</Link>
      )
    })


  return (
    <section className="trip">
      <MainImage image = {image}/>
      <div className="container content">
        <h1>{title}</h1>
        <h2 className="date">{date_of_hike}</h2>
        {tagDOMs}
        <table>
            <tbody>
            <tr key="distance">
                <th>Táv:</th>
                <td>{distance_in_km} km</td>
            </tr>
            <tr key="altitude">
                <th>Szint:</th>
                <td>{altitude_in_m} m</td>
            </tr>
            </tbody>
        </table>
        <div>
            <div className="intro">
            {intro}
            </div>

            <div dangerouslySetInnerHTML={{ __html: description }} />

            <div className="dateCreated">Létrehozva: {created}</div>
            <div className="dateModified"> { created === modified ? "" : "Módosítva: " + modified }</div>
        </div>

      </div>
    </section>
  );
};

export default Trip;
