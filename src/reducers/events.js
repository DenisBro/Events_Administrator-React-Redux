
export default function events(state=[], action){

  if(action.type === 'ADD_EVENT'){
    return [
      ...state,
      action.events
    ];
  }
  if(action.type === 'CHANGE_EVENT'){
    const newStore = state.concat();
    const newEvent = newStore.filter(event=>event.id === action.eventId);
    newEvent[0].totalGuest = action.guests

    return Object.assign([], state, newEvent[0]);
  }
  if(action.type === 'DELETE_EVENT'){
    const newEventStore = state.filter((unit)=>unit.id !== action.events);
    return newEventStore;
  }

  return state;
}
