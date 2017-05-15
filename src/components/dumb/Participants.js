import React from 'react';

export default ({unit, addPartId, deletePart}) => {

  function change(id){
    addPartId(id);
  }
  function deleteUnit(id, evnId){
    deletePart(id, evnId);
  }
  return(<tr>
          <td>{unit.id}</td>
          <td>{unit.name}</td>
          <td>{unit.amount}</td>
          <td>{unit.debt}</td>
          <td>{unit.guests}</td>
          <td><button onClick={()=>change(unit.id)}>Change</button></td>
          <td><button onClick={()=>deleteUnit(unit.id, unit.evnID)}>Delete</button></td>
          </tr>
        );
}
