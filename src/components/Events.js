import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddParticipant from './AddParticipant';

import ConfigParticipant from './ConfigParticipant';
import EventHead from './EventHead';
import ShowParticipants from './ShowParticipants';

class Events extends Component{
  constructor(props){
    super(props);
    this.state={
                count      : 1,
                changeId   : 0
                }

    this.unitConfig = this.unitConfig.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.addPartId = this.addPartId.bind(this);
    this.deleteParticipant = this.deleteParticipant.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  addParticipant(data){
    this.props.onAddParticipant(data);
    this.setState({
            count: this.state.count + 1
        });
  }

  addPartId(id){
    this.setState({
            changeId: id
        });

  }

  unitConfig(unit){
  let newPartStore = this.props.stParticipants.concat();
      newPartStore.forEach((part,index)=>{
        if(part.id === Number(unit.id)){
          return newPartStore.splice(index, 1, unit);
          }
      });
      this.props.onUnitConfig(newPartStore);
  }

  deleteParticipant(id){
    this.props.onDeleteParticipant(id);

  }

  deleteEvent(id){
    this.props.onDeleteEvent(id);
    this.props.onDeleteEventParticipants(id);
  }

  render(){
    return(
      <div>
          {this.props.stEvents.map((evn)=>{
         return <div id={evn.id} className="event-wrap" key={evn.id}>
                  <EventHead currentEvent={evn}
                             deleteEvent={this.deleteEvent}/>
                  <div className="events-manager">
                    <ShowParticipants addPartId={this.addPartId}
                                      eventId={evn.id}
                                      deletePart={this.deleteParticipant}/>
                    <ConfigParticipant unitConfig={this.unitConfig}
                                       eventId={evn.id}
                                       changeId={this.state.changeId}/>
                    <AddParticipant addParticipant={this.addParticipant}
                                    eventId={evn.id}
                                    countId={this.state.count}/>
                  </div>
                </div>
          })}
      </div>
    );
  }
}

export default connect(
  state=>({
    stEvents:       state.events,
    stParticipants: state.participants
  }),
  dispatch=>({
    onAddParticipant: (unit)=>{
      dispatch({type: 'ADD_PARTICIPANT', participant: unit});
    },
    onUnitConfig: (unit)=>{
      dispatch({type: "CONFIG_PARTICIPANT", participant: unit});
    },
    onDeleteParticipant: (id)=>{
      dispatch({type: 'DELETE_PARTICIPANT', participant: id});
    },
    onDeleteEvent: (id)=>{
      dispatch({type: 'DELETE_EVENT', events: id});
    },
    onDeleteEventParticipants: (id)=>{
      dispatch({type: 'DELETE_EVENT_PARTICIPANTS', eventId: id});
    }
  })
)(Events);
