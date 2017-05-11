import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddParticipant from './AddParticipant';


class Events extends Component{
  render(){
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
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Vasia</td>
                        <td>120</td>
                        <td>10</td>
                        <td><button>Change</button></td>
                        <td><button>Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="unit-config">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Amount"/>
                    <input type="number" placeholder="Guests"/>
                    <button>Change</button>
                  </div>
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
