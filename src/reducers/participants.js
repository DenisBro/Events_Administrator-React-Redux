const participant = [{
                id    : 1,
                name  : "Georgy",
                amount: 222,
                guests: 333
              },
              {
                              id    : 1,
                              name  : "Maria",
                              amount:333,
                              guests: 444
                            },
                            {
                                            id    : 1,
                                            name  : "Jana",
                                            amount:555,
                                            guests: 663
                                          },
            ]
export default function participants(state=participant, action){

  if(action.type === 'ADD_PARTICIPANT'){
    return [
      ...state,
      action.payload
    ];
  }
  if(action.type === 'UNIT_CONFIG'){
    return action.payload;

  }

  return state;
}
