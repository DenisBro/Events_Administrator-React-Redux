import React, { Component } from 'react';
import {connect} from 'react-redux';

import AddEvent from './components/AddEvent';
import Events from './components/Events';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count : 1
    }
    this.addEvent = this.addEvent.bind(this);
  }

  // componentDidMount(){
  //   let storeJson = JSON.stringify(this.props.stEvents);
  //   localStorage.setItem('events', storeJson);
  // //  console.log(storeJson);
  // }

  addEvent(data){
    this.props.onAddEvent(data,this.state.count);
    this.setState({
            count: this.state.count + 1
        });
  }


  render() {
    let events;
    if(Object.keys(this.props.stEvents).length !== 0){
       events =  <Events stEvents={this.props.stEvents}/>;
    }
    return (
      <div className="wrap">
        <AddEvent updateEvent={this.addEvent}/>
        {events}
      </div>
    );
  }
}

export default connect(
  state=>({
    stEvents: state.events
  }),
  dispatch=>({
    onAddEvent: (evnt,num)=>{
    const event = {
                    id: num,
                    name  : evnt.name,
                    fee   : evnt.fee,
                    people: evnt.people
                  }
      dispatch({type:'ADD_EVENT', events: event});
    }
  })
)(App);
