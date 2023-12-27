

import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import PaymentComponent from "../Payment/Payment";
import { Link } from "react-router-dom";
import { Header } from "../Component/Header";
import { Footer } from "../Component/Footer";
import { Features } from "../Component/Features";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

//  import setTravelData from '../reducer/Reducer';
// import setFromState from "../action/travelAction";
//  import setToState from "../action/travelAction"
// import setSelectedDate from "../action/travelAction";
// import { setFromState, setToState, setSelectedDate } from '../action/travelAction';


const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Ranchi",
  "Jamshedpur",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const Homepage = () => {
  const [fromState, setFromState] = useState("");
  const [toState, setToState] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");
  const [filteredFromStates, setFilteredFromStates] = useState(statesOfIndia);
  const [filteredToStates, setFilteredToStates] = useState(statesOfIndia);
  const navigate = useNavigate();
 const dispatch = useDispatch();


  const handleStateSelection = (state, type) => {
    if (type === "from") {
      setFromState(state);
      setInputFromValue(state);
      setShowFromDropdown(false);
    } else {
      setToState(state);
      setInputToValue(state);
      setShowToDropdown(false);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const clearInput = (type) => {
    if (type === "from") {
      setFromState("");
      setInputFromValue("");
      setFilteredFromStates(statesOfIndia);
    } else {
      setToState("");
      setInputToValue("");
      setFilteredToStates(statesOfIndia);
    }
  };

  const filterFromStates = (input) => {
    setInputFromValue(input);
    setFilteredFromStates(
      input
        ? statesOfIndia.filter((state) =>
            state.toLowerCase().startsWith(input.toLowerCase())
          )
        : statesOfIndia
    );
  };

  const filterToStates = (input) => {
    setInputToValue(input);
    setFilteredToStates(
      input
        ? statesOfIndia.filter((state) =>
            state.toLowerCase().startsWith(input.toLowerCase())
          )
        : statesOfIndia
    );
  };
  const handleSubmit = () => {
    console.log("komal", fromState, toState, selectedDate);
    let travelDate =[fromState,toState,selectedDate]
    dispatch({ type: 'SET_FROM_STATE', payload:fromState });
    dispatch({ type: 'SET_TO_STATE', payload: toState });
    dispatch({ type: 'SET_SELECTED_DATE', payload: selectedDate });
    navigate("/destination");
}


  return (
    <div>
      <Header />
      <div className="homepage-container">
        <div className="booking-container">
          <div className="input-row">
            <div className="input-container">
              <input
                type="text"
                placeholder="From"
                value={inputFromValue}
                onChange={(e) => filterFromStates(e.target.value)}
                onClick={() => setShowFromDropdown(true)}
              />
              {fromState && (
                <span className="close-icon" onClick={() => clearInput("from")}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
              )}
              {showFromDropdown && (
                <div className="dropdown">
                  {filteredFromStates.map((state) => (
                    <div
                      key={state}
                      onClick={() => handleStateSelection(state, "from")}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="To"
                value={inputToValue}
                onChange={(e) => filterToStates(e.target.value)}
                onClick={() => setShowToDropdown(true)}
              />
              {toState && (
                <span className="close-icon" onClick={() => clearInput("to")}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
              )}
              {showToDropdown && (
                <div className="dropdown">
                  {filteredToStates.map((state) => (
                    <div
                      key={state}
                      onClick={() => handleStateSelection(state, "to")}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="input-container">
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                max={
                  new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
                }
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div>
            {(fromState || toState) && selectedDate && (
              <div className="search-container">
               
                  <Button onClick={handleSubmit}>
                    <span>&#128269;</span> Search
                  </Button>
                
              </div>
            )}
          </div>
        </div>
        {showPayment && (
          <div className="payment-overlay">
            <PaymentComponent />
          </div>
        )}
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default Homepage;
