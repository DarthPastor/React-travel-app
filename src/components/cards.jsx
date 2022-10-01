import React from "react"
import _Asset from "/fuji.jpeg"
import _Asset2 from "/opera.jpeg"
import _Asset3 from "/fjord.jpeg"
 

    export default function Cards(props) {
            return (
                <div className="card">
                    <img src={`/${props.item.image}`} className="card--image"/>
                    <div className="card-stats">
                        <span className="location"> {props.item.location} <a className="anchor" href={`${props.item.googleMapsUrl}`}>view on Google maps</a></span>
                        <h1 className="travel-destination">{props.item.title}</h1>
                        <span className="date">{props.item.startDate} - {props.item.endDate}</span>
                        <h3 className="description">{props.item.description}</h3>
                    </div>
                </div>
            )
        }
