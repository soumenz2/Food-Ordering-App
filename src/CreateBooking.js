import React, { useState } from "react";
import { validation } from "./validation";
import axios from "axios";

let url = "http://localhost:4000/bookings/";

const BookingComponent = () => {
  //State to hold the form details that needs to be added .When user enters the values the state gets updated
  const [state, setState] = useState({
    bouquetName: "",
    bookedOn: "",
    emailId: "",
    flowerCount: "",
  });
  //state to hold the individual validation errors of the form fields
  const [formErrors, setFormErrors] = useState({
    emailIdError: "",
    flowerCountError: "",
    bouquetNameError: "",
    bookedOnError: "",
  });
  //state variable to indicate whether user has given values to all the mandatory fields of the form.
  const [mandatory, setMandatory] = useState(false);
  //state variable to capture the success Message once the booking is completed successfully.
  const [successMessage, setSuccessMessage] = useState("");
    // state variable used to disable the button when any of the given form values is invalid
  const [valid, setvalid] = useState(false);
//state variable to capture the Error Message when there is any error with booking.
  const [errorMessage, setErrorMessage] = useState("");

  //A collection of few messages that the component displays.
  // Wherever applicable, pls use the following json to display the messages instead of hardcoding the messages.
  const [messages] = useState({
    EMAILID_ERROR: "Please enter valid email",
    FLOWER_COUNT_ERROR: "Bouquet count(s) should be 1 or more",
    BOUQUET_NAME_ERROR: "Please select bouquet type",
    BOOKED_ON_ERROR: "Booking date should be after today's date",
    ERROR: "Something went wrong",
    MANDATORY: "Enter all the form fields",
  });
  const handleSubmit = (e) => {
    // 1. This method will be invoked when user clicks on 'Book Bouquet' button.
    // 2. You should prevent page reload on submit
    // 3. check whether all the form fields are entered. If any of the form fields is not entered set the mandatory state variable to true.
    // 4.  If all the form fields values are entered then make axios call to
    // "http://localhost:4000/bookings/" and pass the appropriate state as data to the axios call
    // 5. If the axios call is successful, assign the below string to successMessage state:
    //   "Booking is successfully created with bookingId: " + <id>
    // 6. If the axios call is not successful, assign the error message to "Something went wrong"
    e.preventDefault();

  };

  const handleChange = (event) => {
    /*
       1. This method will be invoked whenever the user changes the value of any form field. This method should also validate the form fields.
       2. 'event' input parameter will contain both name and value of the form field.
       3. Set state using the name and value recieved from event parameter 
       4. call the validateField method for validating form fields.
       */
      setState({...state,[event.target.name]:event.target.value})


  };

  const validateField = (name, value) => {
    /*
1. Write validation for all input fields as given below:
      bouquetName:  use validateBouquet method of validator.js
      emailId: use validateEmail method of validator.js
      flowerCount: use validate flowerCount method of validator.js
      bookedOn: use validateDate method of validator.js

2. Set error message in errorFormMessage state respectively when validation fails.
   error messages are given below:
      bouquetNameError: "Please select bouquet type"
      emailIdError: "Please enter valid email"
      flowerCountError: "Bouquet count(s) should be 1 or more"
      bookedOnError: "Booking date should be after today's date"
*/

    // 3. If all fields are valid, setting state of valid as true.

  };

  return (
    // <h1>create bookiong</h1>
    <React.Fragment>
      <div className="h-46 w-96 border  p-2 m-4 bg-teal-200 shadow-md rounded-md">
        <div className="p-4">
          <div>
            <br />
            <div className="card" style={{ width: "500px" }}>
              <div className="font-bold text-3xl p-2 text-sky-700">
                <h4>Book Your Bouquet</h4>
              </div>
              <div className="p-2">
                <form className="form"  noValidate>
                  {/*
                1. Display successMessage or errorMessage after submission of form
                2. Form should be controlled
                3. Event handling methods should be binded appropriately
                4. Invoke the appropriate method on form submission
                */}
                  <div className="p-2">
                    <label>Bouquet Name</label>
                    <select
                      name="bouquetName"
                      
                      className="mx-2"
                    >
                      <option value="" disabled>
                        Select a bouquet
                      </option>
                      <option value="RosalineRed">Rosaline Red</option>
                      <option value="TerifficTulip">Teriffic Tulip</option>
                      <option value="ChineseChandelier">
                        Chinese Chandelier
                      </option>
                    </select>
                    {/* Check whether the bouquetName error is set, if set display the corresponding error message using conditional rendering
                     */}

                    <span className="text-danger"></span>
                  </div>
                  <div className="p-2">
                    <label>Email Id</label>
                    <input
                      type="email"
                      
                      name="emailId"
                      className="mx-2"
                      placeholder="Enter your email"
                    ></input>

                    {/* Check whether the emailId error is set, if set display the corresponding error message using conditional rendering
                     */}

                    <span className="text-danger"></span>
                  </div>
                  <div className="p-2">
                    <label>No of Bouquet</label>
                    <input
                      type="number"
                      
                      name="flowerCount"
                      className="mx-2"
                      placeholder="Number of Bouquets"
                    ></input>
                    {/* {validation.validateBouquet ?<p>Enter a valid Number</p>} */}

                    {/* Check whether the flowerCount error is set, if set display the corresponding error message using conditional rendering
                     */}

                    <span className="text-danger"></span>
                  </div>
                  <div className="p-2">
                    <label>Booking Date</label>
                    <input
                      type="date"
                      
                      name="bookedOn"
                      className="mx-2"
                    ></input>

                    {/* Check whether the bookedOn error is set, if set display the corresponding error message using conditional rendering
                     */}

                    <span className="text-danger"></span>
                  </div>
                  <br />
                  {/* Bind the disabled attribute to the button to the valid state variable */}
                  <button
                    disabled={!valid}
                    
                    type="submit"
                    name="active"
                    className="p-2 text-white bg-lime-600 rounded-md mx-20 shadow-md hover:bg-lime-400"
                  >
                    Book Bouquet
                  </button>
                  {/*Using the concept of conditional rendering,display success message, error messages related to required fields and axios calls */}
                  {/* {if the form fields are not entered then set the message as 'Enter all the form fields'} */}
                  <div  className="text-danger"></div>


                  <div  className="text-success"></div>
           
             
                  <div className="text-danger"></div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookingComponent;
