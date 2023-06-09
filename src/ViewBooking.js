
import axios from "axios";
import React, { useState } from "react";

let url = "http://localhost:4000/bookings/";

const ViewBooking = (props) => {
  const [state, setState] = useState({
    bookingId: "", // This will contain booking Id from input field
    bookingData: null, // This will contain booking data recieved from web service
    infoMessage: "",
  });
  //A collection of few messages that the component displays.
  // Wherever applicable, pls use the following json to display the messages instead of hardcoding the messages.
  const [messages] = useState({
    INFO: "The booking has been deleted! Please refresh the page.",
    ERRINFO: "Something Went Wrong",
  });

  const handleChange = (event) => {
    /*
    This method should update state of bookingId with the value entered by the user.
    */



  };
  const handleAction = (action) => {
    /*
      This method will be invoked for following action values:
      1. onDelete: a) when a delete button clicks,  axios call to url 
                     "http://localhost:4000/bookings/"+<booking Id>
                   b) update infoMessage state as 'The booking has been deleted! Please refresh the page.' on successful delete operation, otherwise
                      set as "Reservation for booking id: " + <booking Id> + " is not found!"

     2.  isUpdate: a) When a update button is clicked, navigate to '/updateBooking/'+ <booking Id>

    
   */
  }

  return (
    <div className="  justify-centre p-4 m-8 w-96 h-48 bg-teal-200 rounded-md shadow-md">
      <div>
        <br />
        <div className="card">
          <div className=" text-2xl font-bold text-sky-700">
            <h4>View Booking</h4>
          </div>
          <div className="card-body">
            <form className="form" >
              {/* 1. Form should be controlled
                2. Event handling methods should be binded appropriately
                3.Invoke the appropriate method on form submission using the <form> tag */}

              <div className="p-2">
                <label className="p-2">Booking Id</label>
                <input
                  type="text"
                  
                  name="bookingId"
                  className="rounded text-center "
                  placeholder="Enter a booking id"


                />
                {/* Invoke necessary data handler*/}
                <button
                  type="submit"
                  name="button"
                  className="rounded bg-lime-600 hover:bg-lime-400 p-2 my-4 text-white shadow-md"
                >
                  Get Booking
                </button>

                {state.bookingData ? (
                  <table className="table bordered">
                    <thead className="thead">
                      <tr>
                        <th>Booking Id</th>
                        <th>Bouquet Name</th>
                        <th>Email Id</th>
                        <th>No of Bouquet</th>
                        <th>Booking Date</th>
                        <th>Action Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>bookingId</td>
                        <td>bouquetName</td>
                        <td>emailId</td>
                        <td>flowerCount</td>
                        <td>bookedOn</td>
                        {/* On the click of the 'Delete' button call the method handleAction() method and pass the parameter 'onDelete' to handleAction() method  */}
                        <td>
                          <button
                            className="btn btn-danger mt-2 ms-2"
                            name="delete-button"


                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}
                {/*Using the concept of conditional rendering,display the value of the state infoMessage */}

                <p name="message" className="text-info mt-2"></p>

                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBooking;
