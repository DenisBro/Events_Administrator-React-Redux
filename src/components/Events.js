import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddParticipant from './AddParticipant';
import Participants from './Participants';
import ConfigParticipant from './ConfigParticipant';

class Events extends Component{
  constructor(props){
    super(props);
    this.state={
      unitId : ''
    }
    this.changeUnit = this.changeUnit.bind(this);
  }

  changeUnit(ind){
    this.setState({
      unitId : ind
    });
  }

  render(){
  //  console.log(this.state.participantId)
    return(
      <div>
        {this.props.stEvents.map((event,index)=>{
       return <div id={index} className="event-wrap" key={index}>
                <div className="event-label">
                  <h3>Event</h3>
                  <div>Name: {event.name}</div>
                  <div>Partisipation fee: {event.fee}</div>
                  <div>Max number of participants: {event.people}</div>
                </div>
                <div className="events-manager">
                  <table>
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Number of guests</th>
                        <th>Change</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <Participants changeUnit={this.changeUnit} eventId={index}/>
                  </table>
                  <ConfigParticipant eventId={index} unitId={this.state.unitId}/>
                  <AddParticipant eventId={index}/>
                </div>
              </div>
        })}

      </div>
    );
  }
}

export default connect(
  state=>({
    stEvents: state.events
  })
)(Events);
