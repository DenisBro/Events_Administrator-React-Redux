import React from 'react';

export default ({currentEvent, deleteEvent, toggleEventState}) => {

  return(
    <div className="event-label" onClick={()=>toggleEventState(currentEvent.id)}>
      <h3>Event: <span>{currentEvent.name}</span></h3>
      <div>Participation fee: <span>{currentEvent.fee}</span></div>
      <div>Max number of participants: <span>{currentEvent.people}</span></div>
      <div className="event-label-close" onClick={()=>deleteEvent(currentEvent.id)}><span>☓</span></div>
    </div>
  );
}
