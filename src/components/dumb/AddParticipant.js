import React  from 'react';


export default ({ addParticipant, eventId, countId, spotsLeft}) => {

  const sendParticipant = (e)=>{
    e.preventDefault();
    const amount  = e.target.amount.value.trim();
    const guests  = e.target.guests.value.trim();
    const participant = {
                    id    : countId,
                    evnID : eventId,
                    name  : e.target.name.value.trim(),
                    amount: amount,
                    guests: guests
                  }
    e.target.name.value='';
    e.target.amount.value='';
    e.target.guests.value='';

    addParticipant(participant);
  }
  let red = false;
  if(Math.sign(spotsLeft) === -1) red = true;
    return(
      <div>
        <div className="add-participant unit-config">
          <form onSubmit={sendParticipant}>
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
            <button>Add participant</button>
          </form>
        </div>
        <div className="remained"><span>Spots remained: <span className={red ? "red" : "green"}>{Number(spotsLeft)}</span></span></div>
      </div>
    )

}
