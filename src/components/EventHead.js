import React from 'react';

export default ({currentEvent, deleteEvent}) => {

  return(
    <div className="event-label">
      <h3>Event</h3>
      <div>Name: {currentEvent.name}</div>
      <div>Partisipation fee: {currentEvent.fee}</div>
      <div>Max number of participants: {currentEvent.people}</div>
      <div onClick={()=>deleteEvent(currentEvent.id)}>Delete</div>
    </div>
  );
}
