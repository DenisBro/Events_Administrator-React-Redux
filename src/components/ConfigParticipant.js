import React, {Component} from 'react';
import {connect} from 'react-redux';

class ConfigParticipant extends Component{
  constructor(props){
    super(props);
    this.unitConfig = this.unitConfig.bind(this);
  }

  unitConfig(e){
    e.preventDefault();
    let unitId = this.props.unitId;
    let unitObj = {
                  id    : this.props.eventId,
                  name  : e.target.name.value.trim(),
                  amount: e.target.amount.value.trim(),
                  guests: e.target.guests.value.trim()
                }

    e.target.name.value   = '';
    e.target.amount.value = '';
    e.target.guests.value = '';

    let newPartStore = this.props.stParticipants.concat();
      newPartStore.forEach((unit,index)=>{
        if(index === unitId)
          newPartStore.splice(index,1, unitObj);
      });

    this.props.onUnitConfig(newPartStore);
  }

  render(){

    return(
      <div className="unit-config">
        <form onSubmit={this.unitConfig}>
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
          <button>Change</button>
        </form>
      </div>
    )
  }
}

export default connect(
  state=>({
    stParticipants: state.participants
  }),
  dispatch=>({
    onUnitConfig: unit=>{
      dispatch({type: "UNIT_CONFIG", payload: unit})
    }
  })
)(ConfigParticipant);
