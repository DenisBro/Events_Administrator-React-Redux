import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddParticipant extends Component{
  constructor(props){
    super(props);
    this.addParticipant = this.addParticipant.bind(this);
  }

  addParticipant(e){
    e.preventDefault();
  //  console.log(e.target.name.value.trim());
    const name   = e.target.name.value.trim();
    const amount = e.target.amount.value.trim();
    const guests = e.target.guests.value.trim();
    const eventId = this.props.eventId;
    const participant = {
                    id    : eventId,
                    name  : name,
                    amount: amount,
                    guests: guests
                  }

    //console.log(park);
    //const newState = this.
    this.props.onAddParticipant(participant);
  }
  render(){
    return(
      <div className="add-participant unit-config">
        <form onSubmit={this.addParticipant}>
          <input type="text" name="name" placeholder="Name"/>
          <input type="text" name="amount" placeholder="Amount"/>
          <input type="number" name="guests" placeholder="Guests"/>
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
