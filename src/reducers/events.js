const initialEvent =[
                  {
                    name  : "Night Party",
                    fee   : 50,
                    people: 100,
                  },
                  {
                    name  : "Day Party",
                    fee   : 243,
                    people: 123,
                  }

]

export default function events(state=initialEvent, action){

  if(action.type === 'ADD_EVENT'){
    return [
      ...state,
      action.payload
    ];
  }else if(action.type === 'DELETE_EVENT'){
    return action.payload;
  }

  return state;
}
