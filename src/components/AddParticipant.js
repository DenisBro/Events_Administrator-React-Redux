import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddParticipant extends Component{
  constructor(props){
    super(props);
    this.addParticipant = this.addParticipant.bind(this);
  }

  addParticipant(e){
    e.preventDefault();
    const eventId = this.props.eventId;
    const participant = {
                    id    : eventId,
                    name  : e.target.name.value.trim(),
                    amount: e.target.amount.value.trim(),
                    guests: e.target.guests.value.trim()
                  }
    e.target.name.value='';
    e.target.amount.value='';
    e.target.guests.value='';
    this.props.onAddParticipant(participant);
  }
  render(){
    return(
      <div className="add-participant unit-config">
        <form onSubmit={this.addParticipant}>
          <input type="text"
                 name="name"
                 placeholder="Name"
                 maxLength="50"/>
          <input type="number"
                 name="amount"
                 placeholder="Amount"
                 maxLength="6"/>
          <input type="number"
                 name="guests"
                 placeholder="Guests"
                 maxLength="6"/>
          <button>Add participant</button>
        </form>
      </div>
    )
  }
}

export default connect(
  state=>({

  }),
  dispatch=>({
    onAddParticipant: (unit)=>{
      dispatch({type: 'ADD_PARTICIPANT', payload: unit});
    }
  })
)(AddParticipant);
