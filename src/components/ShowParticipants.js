import React, {Component} from 'react';
import {connect} from 'react-redux';

import Participants from './Participants';
import Total from './Total';

class ShowParticipants extends Component{

  render(){
    let totalAmount = 0;
    let totalGuests = 0;
    let totalNumber = 0;
    const participant = this.props.stParticipants.map((unit,index)=>{
      if(unit.evnID===this.props.eventId){
        if(unit.amount !== "") totalAmount += Number(unit.amount);
        if(unit.guests !== "") totalGuests += Number(unit.guests);
        totalNumber++;
        return (<Participants unit={unit}
                              key={index}
                              addPartId={this.props.addPartId}
                              deletePart={this.props.deletePart}/>);
      }else return participant;
    });

    return(
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
          {participant}
          <tr>
            <td colSpan="6">Total:</td>
          </tr>
        <Total totalNumber={totalNumber}
               totalAmount={totalAmount}
               totalGuests={totalGuests}/>
        </tbody>
      </table>
    );
  }
}

export default connect(
  state=>({
    stParticipants: state.participants
  })
)(ShowParticipants);
