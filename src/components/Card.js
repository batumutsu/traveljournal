import React from "react"
import loc from "../images/location.png"
import sydney from "../images/sydney.png"

export default function Card(props) {
    console.log(props)
    return(
        <div className="card--container">
            <img src={props.imageUrl} alt="no pic found" className="card--pic"/>
            <div className="card--main">
                <img src={loc} alt="no pic found" className="card--loc"/>
                <p className="card--country">{props.location}</p>
                <a className="card--google" href={props.googleMapsUrl}>view of Google Maps</a>
                <p className="card--title">{props.title}</p>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--desc">{props.description}</p>

            </div>
        </div>
    )
}