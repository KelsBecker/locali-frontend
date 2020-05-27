import React from 'react'
import { useHistory } from "react-router-dom";

const EventCard = (props) => {
    let history = useHistory()
    console.log(props)
    const {id, image_url, title} = props.event
    return(
        <div className='ui card'>
            <img src={image_url} alt={title}></img>
            <p>{title}</p>
            <button onClick={() => history.push(`/details/${id}`)}>Click For Event Details</button>
        </div>
    )
}

export default EventCard