import React from 'react'
import { useHistory } from "react-router-dom";

function EventCard(props){
    let history = useHistory()
    const {image_url, title } = props.event.attributes
    const {id} = props.event

    return(
        <div className='ui four wide column'>
            <div className='ui card' style={{marginTop: 30}}>
                <div className ='image'>
                    <img className="events-page-image" src={image_url} alt={title}/>
                </div>
                <div className='card-body text-dark'>
                    <h4 className='card-title'>{title}</h4>
                    <button className="button button-outline-success" onClick={() => history.push(`/details/${id}`)}>Event Details</button>
                </div>
            </div>
        </div>
    )
}

export default EventCard
