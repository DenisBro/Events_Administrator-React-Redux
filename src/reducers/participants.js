const initialParticipant =
                  {
                    name  : "Petia",
                    amount   : 100,
                    guests: 3

                  }



export default function participants(state=initialParticipant, action){

  if(action.type === 'ADD_PART'){

    return [
      ...state,
      action.payload
    ];
  }else if(action.type === 'DELETE_PARTICIPANT'){
    return action.payload;
  }

  return state;
}
