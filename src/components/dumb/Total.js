import React from 'react';

export default ({totalAmount, totalGuests, totalNumber, totalDebt}) => {

  return(
    <tr className="total">
        <td>{totalNumber}</td>
        <td></td>
        <td>{totalAmount}</td>
        <td>{totalDebt}</td>
        <td>{totalGuests}</td>
        <td></td>
        <td></td>
    </tr>
  );
}
