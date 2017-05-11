import React, {Component} from 'react';

class Events extends Component{
  render(){
    return(
      <div>
        <div className="events">
          <h3>Event</h3>
          <div>Name:</div>
          <div>Partisipation fee:</div>
          <div>Max number of participants:</div>
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
          <div className="changer">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Amount"/>
            <input type="number" placeholder="Guests"/>
            <button>Change</button>
          </div>
          <div className="add-participant changer">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Amount"/>
            <input type="number" placeholder="Guests"/>
            <button>Add participant</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
