import React from 'react';

export default ({totalAmount, totalGuests, totalNumber}) => {

  return(
    <tr>
        <td>{totalNumber}</td>
        <td></td>
        <td>{totalAmount}</td>
        <td>{totalGuests}</td>
        <td></td>
        <td></td>
    </tr>
  );
}
