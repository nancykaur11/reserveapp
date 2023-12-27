import React, { useState } from "react";
import { Header } from "./Component/Header";
import "./SecondPage/Secondpage.css";
import { faStar, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { PassengerInfo } from "./Component/PassengerInfo";
export function Passenger() {
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
  const { fromState, toState, selectedDate, selectedTrip } = useSelector(
    (state) => state.travel
  );
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState(
    localStorage.getItem("selectedSeats")
  );


  
  const [noSeat, setNoSeat] = useState(localStorage.getItem("NoSeats"));

  return (
    <div>
      <Header />
      <div className="homepage-container row">
        <div className="col-6">
          <div className="passenger-container">
            {selectedTrip &&
              selectedTrip.map((data, index) => (
                <div key={index} style={{ padding: "16px" }}>
                  <div className="row" style={{ fontFamily: "serif" }}>
                    <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                      {data.busName}
                    </div>
                    <span className="passenger-busname">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "yellow" }}
                      />
                      {6}
                    </span>{" "}
                    rating
                  </div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>From</b>
                    </div>
                    <div className="col-6 text-center">{data.from}</div>
                  </div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>To</b>
                    </div>
                    <div className="col-6 text-center">{data.to}</div>
                  </div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>Timing</b>
                    </div>
                    <div className="col-6 text-center">{data.startTime}</div>
                  </div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>Duration</b>
                    </div>
                    <div className="col-6 text-center">
                      {calculateTimeDuration(data.startTime, data.EndTime)}
                    </div>
                  </div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>Date</b>
                    </div>
                    <div className="col-6 text-center">{data.date}</div>
                  </div>

                  <div class="filter-section"></div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>Trip Cost</b>
                    </div>
                    <div className="col-6 text-center">
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        style={{ marginTop: "7px" }}
                      />
                      {data.busFare * noSeat}
                    </div>
                  </div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>Total Passenger</b>
                    </div>
                    <div className="col-6 text-center">{noSeat}</div>
                  </div>
                  <div className="row pass-row">
                    <div className="col-6 text-start">
                      <b>Seat </b>
                    </div>
                    <div className="col-6 text-center">
                      {selectedSeatNumbers}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* {showPayment && (
              <div className="payment-overlay">
                <PaymentComponent />
              </div>
            )} */}
        <div className="col-6">
          <PassengerInfo
            totalSeats={noSeat}
            selectedSeat={selectedSeatNumbers}
          />
        </div>
      </div>
    </div>
  );
}

// // Passenger.js
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// import {Header} from "./Component/Header";
// import { calculateTimeDuration } from "./utils";
// import "./SecondPage/Secondpage.css";

// export function Passenger() {
//   const { selectedTrip } = useSelector(state => state.travel);
//   const [selectedSeatNumbers, setSelectedSeatNumbers] = useState([]);
//   const [noSeat, setNoSeat] = useState(0);

//   useEffect(() => {
//     const storedSeats = localStorage.getItem('selectedSeats');
//     const storedNoSeats = localStorage.getItem('NoSeats');
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="homepage-container">
//         <div className="passenger-container">
//           {selectedTrip && selectedTrip.map((data, index) => (
//             <TripInfo key={index} data={data} noSeat={noSeat} selectedSeatNumbers={selectedSeatNumbers} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function TripInfo({ data, noSeat, selectedSeatNumbers }) {
//   return (
//     <div className="trip-info">
//       <TripHeader busName={data.busName} rating={6} />
//       <TripDetail label="From" value={data.from} />
//       <TripDetail label="To" value={data.to} />
//       <TripDetail label="Timing" value={data.startTime} />
//       <TripDetail label="Duration" value={calculateTimeDuration(data.startTime, data.EndTime)} />
//       <TripDetail label="Date" value={data.date} />
//       <TripCost fare={data.busFare} noSeat={noSeat} />
//       <TripDetail label="Total Passenger" value={noSeat} />
//       <TripDetail label="Seat" value={selectedSeatNumbers.join(', ')} />
//     </div>
//   );
// }

// function TripHeader({ busName, rating }) {
//   return (
//     <div className="trip-header">
//       <strong>{busName}</strong>
//       <span className="trip-rating">
//         <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> {rating} rating
//       </span>
//     </div>
//   );
// }

// function TripDetail({ label, value }) {
//   return (
//     <div className=" row trip-detail">
//       <div className="col-6" >{label}</div>
//       <div className="col-6" >{value}</div>
//     </div>
//   );
// }

// function TripCost({ fare, noSeat }) {
//   return (
//     <div className="trip-cost">
//       <b>Trip Cost</b>
//       <div>
//         <FontAwesomeIcon icon={faIndianRupeeSign} />
//         {fare * noSeat}
//       </div>
//     </div>
//   );
// }
