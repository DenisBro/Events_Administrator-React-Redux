import React from 'react';

export default ({unit, addPartId, deletePart}) => {
  function change(id){
    addPartId(id);
  }
  function deleteUnit(id){
    deletePart(id);
  }
  return(<tr>
          <td>{unit.id}</td>
          <td>{unit.name}</td>
          <td>{unit.amount}</td>
          <td>{unit.guests}</td>
          <td><button onClick={()=>change(unit.id)}>Change</button></td>
          <td><button onClick={()=>deleteUnit(unit.id)}>Delete</button></td>
          </tr>
        );
}
