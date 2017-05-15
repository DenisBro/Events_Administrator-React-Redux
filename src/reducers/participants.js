
export default function participants(state=[], action){

  if(action.type === 'ADD_PARTICIPANT'){
    return [
      ...state,
      action.participant
    ];
  }
  if(action.type === 'CONFIG_PARTICIPANT'){
    return Object.assign([], state, action.participant);
  }
  if(action.type === 'DELETE_PARTICIPANT'){
    const newPartStore = state.filter((unit)=>unit.id !== action.participant);
    return newPartStore;
  }
  if(action.type === 'DELETE_EVENT_PARTICIPANTS'){
    const newPartStore = state.filter((unit)=>unit.evnID !== action.eventId);
    return newPartStore;
  }

  return state;
}
