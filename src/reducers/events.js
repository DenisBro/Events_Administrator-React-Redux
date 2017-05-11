const initialEvent =[
                  {
                    name  : "Night Party",
                    fee   : 50,
                    people: 100,
                    participants: []
                  },
                  {
                    name  : "Day Party",
                    fee   : 243,
                    people: 123,
                    participants: []
                  }

]

export default function events(state=initialEvent, action){
  //  console.log(state[0].participants);
  if(action.type === 'ADD_EVENT'){
    return [
      ...state,
      action.payload
    ];
  }else if(action.type === 'ADD_PARTICIPANT'){

    state.map((event,index)=>{
      let numbPart = event.participants.length;
      if(numbPart === 0){
        if(index === action.payload.id){
          state[index].participants[0] = action.payload;
          return state;
        }else return state;
      }else{
          if(index === action.payload.id){
            state[index].participants[numbPart] = action.payload;
            return state;
          }else{
            return console.log("Something wrong in ADD_PARTICIPANT");
          }
      }

    });
  //state[0].participants = action.payload;


  }else if(action.type === 'DELETE_EVENT'){
    return action.payload;
  }

  return state;
}
