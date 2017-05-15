import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddParticipant from './dumb/AddParticipant';
import ConfigParticipant from './dumb/ConfigParticipant';
import EventHead from './dumb/EventHead';
import ShowParticipants from './dumb/ShowParticipants';

class Events extends Component{
  constructor(props){
    super(props);
    this.state={
                count      : 1,
                changeId   : 0,
                confOpened : true,
                eventOpened: false,
                eventOpendId: 0
                }

    this.unitConfig = this.unitConfig.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.addPartId = this.addPartId.bind(this);
    this.deleteParticipant = this.deleteParticipant.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.toggleEventState = this.toggleEventState.bind(this);
    this.toggleConfState = this.toggleConfState.bind(this);
  }

  totalFactory(type, data){
    if(data.guests !== ""){
      let newPartStore = this.props.stParticipants.concat();
      let allGusets = 0;

      newPartStore.forEach( unit =>{
        if(type === "addPart" && Number(unit.evnID) === data.evnID){
          allGusets += Number(unit.guests);
        }
        if(type === "conPart" && data.guests !== "" && Number(unit.evnID) === data.evnID && Number(unit.id) !== Number(data.id)){
          console.log(typeof data.guests);
          allGusets += Number(unit.guests);
        }
        if(type === "delPart" && Number(unit.evnID) === data.evnID && Number(unit.id) !== data.id){
          allGusets += Number(unit.guests);
        }
      });

      if(type !== "delPart") allGusets += Number(data.guests);
      this.props.onChangeEvent(allGusets, data.evnID);
    }
  }

  addParticipant(data){
    this.totalFactory("addPart", data);

    this.calculDebt(data);

    this.props.onAddParticipant(data);

    this.setState({
            count: this.state.count + 1
        });
  }

  calculDebt(data){
    const newEventStore = this.props.stEvents.concat();
    const event = newEventStore.filter((event)=>event.id===data.evnID);
    let debt = Number(event[0].fee) * data.guests - data.amount;
    //return object with property debt
    data.debt = debt;
  }

  unitConfig(part){
    this.totalFactory("conPart", part);

    let newPartStore = this.props.stParticipants.concat();
      newPartStore.forEach((unit,index)=>{
        if(unit.id === Number(part.id)){

          if(!part.name)  part.name = unit.name;
          if(!part.amount)  part.amount = unit.amount;
          if(!part.guests)  part.guests = unit.guests;

          this.calculDebt(part);

          return newPartStore.splice(index, 1, part);
          }
      });
      this.props.onUnitConfig(newPartStore);

      this.setState({
              confOpened: !this.state.confOpened
          });
  }

  addPartId(id){
    this.setState({
            changeId: id,
            confOpened: !this.state.confOpened
        });
  }

  deleteParticipant(idPart, evnId){
    this.totalFactory("delPart", {id: idPart, evnID: evnId});
    this.props.onDeleteParticipant(idPart);

  }

  deleteEvent(id){
    this.props.onDeleteEvent(id);
    this.props.onDeleteEventParticipants(id);
  }

  toggleEventState(id){
    this.setState({
          confOpened: false,
          eventOpened: !this.state.eventOpened,
          eventOpendId: id
        });
  }

  toggleConfState(){
    this.setState({
          confOpened: !this.state.eventOpened
        });
  }

  render(){
    return(
      <div className="events">
          {this.props.stEvents.map((evn)=>{
            let config;
            let manager;
            let spotsLeft = Number(evn.people) - Number(evn.totalGuest);
            if(this.state.confOpened){
              config =  <ConfigParticipant
                            unitConfig={this.unitConfig}
                            eventId={evn.id}
                            changeId={this.state.changeId}
                            toggleConfState={this.toggleConfState}/>
                      }
            if(this.state.eventOpened && this.state.eventOpendId === evn.id){
                manager = <div>
                            <div className="events-manager-wrap"></div>
                            <div className="events-manager">
                              <div className="event-manager-header">
                                <div>Event name: <span>{evn.name}</span></div>
                                <div>Participation fee: <span>{evn.fee}</span></div>
                                <div>Max participants: <span>{evn.people}</span></div>

                              </div>
                              <div className="events-manager-close" onClick={()=>this.toggleEventState(evn.id)}><span>☓</span></div>
                              <div className="event-participants">
                                <ShowParticipants
                                      addPartId={this.addPartId}
                                      eventId={evn.id}
                                      deletePart={this.deleteParticipant}
                                      stParticipants={this.props.stParticipants}/>
                                {config}
                                <AddParticipant
                                      addParticipant={this.addParticipant}
                                      eventId={evn.id}
                                      countId={this.state.count}
                                      spotsLeft={spotsLeft}/>
                              </div>
                            </div>
                          </div>
                      }

                  return (<div id={evn.id} className="event-wrap" key={evn.id}>
                            <EventHead currentEvent={evn}
                                       deleteEvent={this.deleteEvent}
                                       toggleEventState={this.toggleEventState}/>
                            {manager}
                          </div>);
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
    },
    onChangeEvent: (totalGuests, id)=>{
      dispatch({type: 'CHANGE_EVENT', guests: totalGuests, eventId: id});
    }
  })
)(Events);
