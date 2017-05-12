import React, {Component} from 'react';
import {connect} from 'react-redux';


class Participants extends Component{
  constructor(props){
    super(props);
    this.state={
      money: 0
    }
    this.change = this.change.bind(this);
    this.addMoney = this.addMoney.bind(this);
  }
  change(ind){
    this.props.changeUnit(ind);
  }

  addMoney(mn){
    this.setState({
      money: mn
    })
  }

  render(){
    var money=0;
    //var numb=0;
    return(
      <tbody>
        {this.props.stParticipants.map((unit,index)=>{
          let participant;
          if(this.props.eventId === unit.id){

            ++index;
             return <tr key={index}>
                      <td>{index}</td>
                      <td>{unit.name}</td>
                      <td>{unit.amount}</td>
                      <td>{unit.guests}</td>
                      <td><button onClick={()=>this.change(--index)}>Change</button></td>
                      <td><button>Delete</button></td>
                    </tr>
              }
              return participant;

        })
      }
      <tr>
        <td colSpan="6">Total:</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>{money}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>

    )
  }
}

export default connect(
  state=>({
    stEvents: state.events,
    stParticipants: state.participants
  })
)(Participants);
