import React  from 'react';


export default ({ addParticipant, eventId, countId }) => {


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

    // let newEventStore = this.props.stEvents.concat();
    //   newEventStore.forEach((unit,index)=>{
    //     if(index === eventId){
    //       let newEvent = {
    //         name  : unit.name,
    //         fee   : unit.fee,
    //         people: unit.people,
    //         amount: unit.amount + Number(amount),
    //         guests: unit.guests + Number(guests)
    //       }
    //       newEventStore.splice(index,1, newEvent);
    //     }
    //
    //        console.log("new", newEventStore);
    //        console.log("old", this.props.stEvents);
    //   });

    addParticipant(participant);
    // this.props.onChangeEvent(newEventStore);
  }


    return(
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
    )

}
