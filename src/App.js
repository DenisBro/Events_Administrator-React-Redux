import React, { Component } from 'react';
import {connect} from 'react-redux';
import Events from './components/Events';


import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.addEvent = this.addEvent.bind(this);
  }

  componentDidMount(){
    let storeJson = JSON.stringify(this.props.stEvents);
    localStorage.setItem('events', storeJson);
  //  console.log(storeJson);
  }
  addEvent(e){
    e.preventDefault();
    const name   = e.target.name.value.trim();
    if(name === "")
      return alert('Enter the name of Event!');
    const event  = {
                    name  : name,
                    fee   : e.target.fee.value.trim(),
                    people: e.target.people.value.trim(),
                  }
    e.target.name.value   = '';
    e.target.fee.value    = '';
    e.target.people.value = '';
    this.props.onAddEvent(event);
  }

  render() {
  //  console.log(this.props.stEvents);
    let events;
    if(this.props.stEvents.length !== 0){
       events =  <Events stEvents={this.props.stEvents}/>;
    }
    return (
      <div className="wrap">
        <div className="create-events">
          <form onSubmit={this.addEvent}>
            <input type="text"
                   name="name"
                   placeholder="Name of event"
                   maxLength="50"
                   required/>
                 <input type="number"
                   name="fee"
                   placeholder="Partisipation fee"
                   required
                   maxLength="6"/>
            <input type="number"
                   name="people"
                   placeholder="Max number of participants"
                   required
                   maxLength="6"/>
            <button>Create</button>
          </form>
        </div>

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
    onAddEvent: (data)=>{
      dispatch({type:'ADD_EVENT', payload:data})
    }
  })
)(App);
