import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  

  //useEffect can be used to fetch the booking details when the component is mounted. Hence the data obtained is to be updated in the corresponding state.
  //in case of failure to fetch data the .catch block should generate a message stating "Something went Wrong"
 useEffect(()=>{
  axios.get("http://localhost:4000/bookings")
  .then((result) => {
    setBookings(result)
    
  }).catch((err) => {
    alert("Something went Wrong")
    
  });
 }
 )

  const handleAction = (id) => {
    // Delete the booking from the database by placing HTTP delete request to the
    // url - http://localhost:4000/bookings/<plan ID>
    // If the Axios call is successful, generate an alert "The booking for Booking ID :" <id > " is deleted" and navigate to home page
    // If the Axios call fails, generate alert "Something went wrong".
    axios.delete("http://localhost:4000/bookings"+id)
    .then((result) => {
      alert("The booking for Booking ID :" +id +" is deleted")
      
    }).catch((err) => {
      alert("Something went wrong")
      
    });
    
  };

  return (
   <>
      {/* display individual bookings in Cards and apply some inline styling */}
      {
      bookings.map((items)=>{
        return(
          <div>
          <h4>Booking id :{items.id}</h4>
          <p>Bouquet Name :{items.bouquetName}</p>
          <p>Email Id :{items.emailId}</p>
          <p>No of Bouquet :{items.flowerCount}</p>
          <p>Booking Date :{items.bookedOn}</p>
          <button className="btn btn-danger mt-2 ms-2" name="delete-button" onClick={handleAction}>
    
            Delete
          </button>
          </div>

        )


      })}
      </>
    
      // {/* generate necessary code to call the function to handle delete opration of the user */}
    // <h1>All booking</h1>
  );
}

export default AllBookings;
