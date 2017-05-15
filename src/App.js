import React, { Component } from 'react';
import {connect} from 'react-redux';

import AddEvent from './components/dumb/AddEvent';
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

  addEvent(data){
    this.props.onAddEvent(data,this.state.count);
    this.setState({
            count: this.state.count + 1
        });
  }

  render() {
    let events;
    if(Object.keys(this.props.stEvents).length !== 0){
       events =  <Events />;
    }else events = <div className="no-events">No Events</div>
    return (
      <div className="wrap">
        <fieldset>
          <legend>Events</legend>
          {events}
          </fieldset>
        <AddEvent addEvent={this.addEvent}/>
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
                    id       : num,
                    name     : evnt.name,
                    fee      : evnt.fee,
                    people   : evnt.people,
                    totalGuest: evnt.totalGuest
                  }
      dispatch({type:'ADD_EVENT', events: event});
    }
  })
)(App);
