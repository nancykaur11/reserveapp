import React, { useEffect, useState } from "react";
import { Header } from "../Component/Header";
import { Footer } from "../Component/Footer";
import "./Secondpage.css";
import {
  faStar,
  faIndianRupeeSign,
  faArrowRight,
  faXmark,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import PaymentComponent from "../Payment/Payment";
import SeatLayout from "./BusSeatLayout";
import { useDispatch, useSelector } from 'react-redux';
import { setTrips} from "../action/travelAction";
 
export function SecondPage() {
  const [showPayment, setShowPayment] = useState(false);

  const [selectedTrip, setSelectedTrip] = useState(null);
 
 const { fromState, toState, selectedDate,  trips } = useSelector(state => state.travel);
 
  // const fromState = useSelector(state => state.travel.fromState);
  // const toState = useSelector(state => state.travel.fromState);
  // const selectedDate = useSelector(state => state.travel.fromState);
  const dispatch=useDispatch();

  console.log(fromState,"komal",toState,selectedDate,trips,"trips")
  
  const closePayment = () => {
    setSelectedTrip(null);
  };
  // useEffect(() => {
  //   dispatch(fetchTrips(fromState, toState, selectedDate));
  // }, [dispatch, fromState, toState, selectedDate]);

  const fetchTrips = () => {
    console.log("secondpage",fromState,toState,selectedDate)
   
  
      axios
        .get(`http://localhost:3000/trips?from=${fromState}&to=${toState}&date=${selectedDate}`)
        .then((response) => {
          console.log("response")
          dispatch({ type: 'SET_TRIPS', payload: response.data }); 
        })
        .catch((error) => {
          dispatch({ type: 'SET_ERROR', payload: error.message }); 
        })
        .finally(() => {
          dispatch({ type: 'SET_LOADING', payload: false }); 
        });
    
  };
  useEffect(() => {
    fetchTrips();
  }, []);


  function calculateTimeDuration(startTime, endTime) {
    let startParts = startTime.split(":");
    let endParts = endTime.split(":");
    let startHours = parseInt(startParts[0], 10);
    let startMinutes = parseInt(startParts[1], 10);
    let endHours = parseInt(endParts[0], 10);
    let endMinutes = parseInt(endParts[1], 10);
    let hours = endHours - startHours;
    let minutes = endMinutes - startMinutes;
    if (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }
    return `${hours}hrs  ${minutes}mins `;
  }
  const handleViewSeats = (trip) => {
    setSelectedTrip(trip);
    console.log(selectedTrip
      , "trip====","selectedTrip");
    let details=[trip]
    dispatch({ type: 'SETECTED_TRIP', payload:details});
  };
  const [apiData, setApiData] = useState(trips);
  console.log(apiData,"apuiData")

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:3000/trips?from=${fromState}&to=${toState}&date=${selectedDate}`
  //     )
  //     .then((response) => {
  //       setApiData(response.data);
  //       console.log(response.data, "----------");
  //     })
  //     .catch((error) => {
  //       console.error("API call failed", error);
  //     });
  // }, []);
  const seatsData = [
    { id: "1A", available: true, type: "standard" },
    { id: "1B", available: false, type: "standard" },
  ];

  const Seat = ({ seat, onSelect }) => {
    const handleClick = () => {
      if (seat.available) {
        onSelect(seat);
      }
    };
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "start" }}>Home</div>
      <div className="contain">
        {fromState} <FontAwesomeIcon icon={faArrowRight} /> {toState}
      </div>
      <div className="con">
        <div className="conLeft">
          <h5>Filter</h5>
          <div class="filter-section"></div>
          <div class="departure-times">
            <h6>DEPARTURE TIME</h6>
            <label>
              <input type="checkbox" name="time" value="morning" /> Morning
            </label>
            <label>
              <input type="checkbox" name="time" value="afternoon" /> Afternoon
            </label>
            <label>
              <input type="checkbox" name="time" value="evening" /> Evening
            </label>
            {/* <label>
              <input type="checkbox" name="time" value="after-6" /> After 6 PM
            </label> */}
          </div>
          <div class="arrival-times">
            <h6>ARRIVAL TIME</h6>
            <label>
              <input type="checkbox" name="arrival-time" value="morning" />{" "}
              Morning
            </label>
            <label>
              <input type="checkbox" name="arrival-time" value="afternoon" />{" "}
              Afternoon
            </label>
            <label>
              <input type="checkbox" name="arrival-time" value="night" /> Night
            </label>
            {/* <label>
              <input type="checkbox" name="arrival-time" value="after-6" />{" "}
              After 6 PM
            </label> */}
          </div>
          <div class="rating">
            <h6>RATING</h6>
            <label>
              <input type="checkbox" name="rating" value="5" />{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />5
            </label>
            <label>
              <input type="checkbox" name="rating" value="4" />{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> 4
              and above
            </label>
            <label>
              <input type="checkbox" name="rating" value="3" />{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> 3
              and above
            </label>
            <label>
              <input type="checkbox" name="rating" value="2" />{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />2 and
              above
            </label>
            <label>
              <input type="checkbox" name="rating" value="1" />{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />1 and
              above
            </label>
          </div>
        </div>
        <div className="conRight">
          {/* <div className="flex-container">
            <div className="flex-item">Bus Name</div>
            <div className="flex-item">Departure</div>
            <div className="flex-item">Duration</div>
            <div className="flex-item">Arrival Time</div>
            <div className="flex-item">Rating </div>
            <div className="flex-item">Bus Fare </div>
            <div className="flex-item">Seat Available</div>
          </div> */}
          {/* // Assuming apiData is an array of objects
{apiData &&
    apiData.map((data, index) => (
        <div key={index} className="con">
            <div className="conLeft">
                <div>{data.busName}</div>
               
            </div>
            <div className="conRight">
                <div className="flex-containers">
                    <div className="flexs">
                        <div className="col-1">{data.startTime}</div>
                    </div>
                    <div className="flexs">
                        <div className="col-10 but-button">
                            {data.animeties_list.join(" | ")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
} */}
          {trips &&
            trips.map((data, index) => (
              <div
                key={index}
                className="flex-containers"
                style={{ padding: "5px" }}
              >
                <div className="con">
                  <div className="conRight">
                    <div className="row" style={{ fontFamily: "serif" }}>
                      <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                        {data.busName}
                      </div>
                      <span
                        style={{
                          padding: "12px",
                          marginLeft: "35px",
                          marginRight: "5px",
                          background: "green",
                          color: "white",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />{" "}
                        {6}
                      </span>{" "}
                      rating
                    </div>
                    <div className="row">
                      {data.category} |{" "}
                      {data.schedules && data.schedules.length > 0
                        ? data.schedules[0].totalSeats
                        : "N/A"}{" "}
                      |
                      {data.schedules && data.schedules.length > 0
                        ? data.schedules[0].totalWindowSeatsAvailable
                        : "N/A"}
                    </div>

                    <div className="row">
                      <div>{data.startTime}</div>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        style={{
                          padding: "5px",
                          marginLeft: "15px",
                          marginLeft: "15px",
                        }}
                      />
                      {calculateTimeDuration(data.startTime, data.EndTime)}
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        style={{
                          padding: "5px",
                          marginLeft: "15px",
                          marginLeft: "15px",
                        }}
                      />
                      {data.EndTime}
                    </div>

                    <div
                      className="row"
                      style={{ paddingTop: "15px", color: "blue" }}
                    >
                      {data.animeties_list.join(" | ")}
                    </div>
                    {/* <div className="col-1">{data.EndTime}</div>
          <div className="col-1">
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> 5
          </div> */}
                  </div>
                  <div class="filter-section"></div>
                  <div className="conLefts">
                    <div
                      className="row text-center"
                      style={{
                        fontWeight: "bold",
                        fontSize: "larger",
                        paddingBottom: "4px",
                      }}
                    >
                      Trip Cost
                    </div>
                    <div className="row" style={{ paddingBottom: "5px" }}>
                      starting from
                    </div>
                    <div
                      className="row"
                      style={{ fontSize: "larger", fontSize: "larger" }}
                    >
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        style={{ marginTop: "7px" }}
                      />
                      {data.busFare}
                    </div>
                    {/* <div className="row but-button">
                      <button
                        onClick={() => setShowPayment(true)}
                        style={{ background: "red", color: "white" }}
                      >
                        Seat View
                      </button>
                    </div> */}
                    <div className="row but-button">
                      <button
                        onClick={() => handleViewSeats(data)}
                        style={{ background: "red", color: "white" }}
                      >
                        Seat View
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="row flexs">
        <div className="col-10 but-button">
          {data.animeties_list.join(" | ")}
        </div>
        <div className="col-2 but-button">
          <button
            onClick={() => setShowPayment(true)}
            style={{ background: "red", color: "white" }}
          >
            Seat View
          </button>
        </div>
      </div> */}
                
                  {/* {selectedTrip &&
                    selectedTrip.schedules &&
                    selectedTrip.schedules.length > 0 && (
                      <SeatLayout
                        totalSeats={selectedTrip.schedules[0].totalSeats}
                        onClose={closePayment}
                      />
                    )} */}

                  {selectedTrip && selectedTrip._id === data._id && (
                    <SeatLayout
                      totalSeats={selectedTrip.schedules[0].totalSeats}
                      onClose={closePayment}
                    />
                  )}

                {/* {selectedTrip && selectedTrip.id === data.id && (
                  <SeatLayout
                    totalSeats={selectedTrip.schedules[0].totalSeats}
                    onClose={closePayment}
                  />
                )} */}
              </div>
            ))}
        </div>

        {/* {showPayment && (
          <div className="payment-overlay">
            <PaymentComponent onClose={closePayment} />
          </div>
        )} */}
      </div>

      <Footer />
    </div>
  );
}
