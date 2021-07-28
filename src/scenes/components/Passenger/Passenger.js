import React from 'react';
import { Card, Img, Trip } from './PassengerStyles';

export default function Passenger(props) {

 const displayPassengers = (props) => {
    const { passengers } = props;
    if(passengers.length > 0) {
      return (
        passengers.map((passenger,index) => {
          return(
            <div style={Card} key={index}>
              <img style={Img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR3hMw_3daUL3Uhr5Y3uJh_kMaYzyqQhhPA&usqp=CAU" />
              <div>Name: {passenger.name}</div>
              <div style={Trip}>Trips: {passenger.trips}</div>
            </div>
          )
        })
       )
     }
     else {
       return (<h3>No passengers yet</h3>)
     }
 }
 return(
   <>
      {displayPassengers(props)}
   </>
 )
}
