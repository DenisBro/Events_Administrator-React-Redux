const participant = [{
                id    : 0,
                evnID : 1,
                name  : "Georgy",
                amount: 222,
                guests: 333
              },
              {
                id    : 0,
                evnID : 1,
                name  : "Maria",
                amount:333,
                guests: 444
              },
                {
                  id    : 1,
                  evnID : 0,
                  name  : "Jana",
                  amount: 555,
                  guests: 663
                },
            ]
export default function participants(state=participant, action){

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
