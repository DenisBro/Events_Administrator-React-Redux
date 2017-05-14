import React from 'react';

export default ({unitConfig, eventId, changeId}) => {

  const sendConfig = (e)=>{
    e.preventDefault();
    let unitObj = {
                  id    : changeId,
                  evnID : eventId,
                  name  : e.target.name.value.trim(),
                  amount: e.target.amount.value.trim(),
                  guests: e.target.guests.value.trim()
                }

    e.target.name.value   = '';
    e.target.amount.value = '';
    e.target.guests.value = '';

    unitConfig(unitObj)
  }


    return(
      <div className="unit-config">
        <form onSubmit={sendConfig}>
          <input type="text"
                 name="name"
                 placeholder="Name"
                 maxLength="50"/>
          <input type="number"
                 name="amount"
                 placeholder="Amount"
                 maxLength="6"/>
          <input type="number"
                 name="guests"
                 placeholder="Guests"
                 maxLength="6"/>
          <button>Change</button>
        </form>
      </div>
    )

}
