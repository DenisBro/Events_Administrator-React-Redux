const initialEvent =[{
                              id:0,
                              name  : "Night Party",
                              fee   : 50,
                              people: 100,
                      }

                      ]

export default function events(state=initialEvent, action){

  if(action.type === 'ADD_EVENT'){
  //  return Object.assign({}, state, {event:action.events})
    return [
      ...state,
      action.events
    ];
  }
  if(action.type === 'DELETE_EVENT'){
    const newEventStore = state.filter((unit)=>unit.id !== action.events);
    return newEventStore;
  }

  return state;
}
