import React from 'react';

import Participants from './Participants';
import Total from './Total';

export default ({changeEvent, stParticipants, eventId, addPartId, deletePart}) => {

    let totalAmount = 0;
    let totalGuests = 0;
    let totalDebt = 0;
    let totalNumber = 0;
    const participant = stParticipants.map((unit,index)=>{
      if(unit.evnID === eventId){
        if(unit.amount !== "") totalAmount += Number(unit.amount);
        if(unit.guests !== "") totalGuests += Number(unit.guests);
        if(unit.debt   !== "") totalDebt   += Number(unit.debt);
        totalNumber++;

        return <Participants unit={unit}
                              key={index}
                              addPartId={addPartId}
                              deletePart={deletePart}/>
      }else return participant;
    });

    return(
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Amount paid</th>
            <th>Amount remaining</th>
            <th>Number of guests</th>
            <th>Change</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {participant}
          <tr>
            <td className="total-label" colSpan="7">Total:</td>
          </tr>
        <Total totalNumber={totalNumber}
               totalAmount={totalAmount}
               totalGuests={totalGuests}
               totalDebt={totalDebt}/>
        </tbody>
      </table>
    );
  }
