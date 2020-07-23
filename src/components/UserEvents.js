import React from 'react'
import UserEventsContainer from '../containers/UserEventsContainer'

class UserEvents extends React.Component {
    
    render() { 
        return ( 
            <div>
                <UserEventsContainer joinedEvents={this.props.joinedEvents} currentUser={this.props.currentUser} removeRSVP={this.props.removeRSVP}/>
            </div>
        );
    }
}
 
export default UserEvents;