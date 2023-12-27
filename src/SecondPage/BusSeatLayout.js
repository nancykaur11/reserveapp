// import React, { useState } from "react";
// import "./Secondpage.css";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "react-bootstrap/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const SeatLayout = ({ totalSeats, onClose }) => {
//   const [selectedSeats, setSelectedSeats] = useState(
//     Array.from({ length: totalSeats }, () => false)
//   );
//   const { fromState, toState, selectedDate, trips, selectedTrip } = useSelector(
//     (state) => state.travel
//   );
//   const isAnySeatSelected = selectedSeats.some((seat) => seat);
//   const [selectedSeatNumbers, setSelectedSeatNumbers] = useState([]);
//   const navigate = useNavigate();
//   const toggleSeatSelection = (seatIndex) => {
//     const updatedSelectedSeats = [...selectedSeats];
//     updatedSelectedSeats[seatIndex] = !updatedSelectedSeats[seatIndex];
//     const seatLabel = getSeatLabel(seatIndex);
//     if (updatedSelectedSeats[seatIndex]) {
//       setSelectedSeatNumbers([...selectedSeatNumbers, seatLabel]);
//     } else {
//       setSelectedSeatNumbers(
//         selectedSeatNumbers.filter((number) => number !== seatLabel)
//       );
//     }
//     setSelectedSeats(updatedSelectedSeats);
//   };

//   const  handlePayment=()=>{
//     navigate("/passenger");
//   }
//   const getSeatLabel = (seatIndex) => {
//     const rowIndex = Math.floor(seatIndex / 7);
//     return `${seatIndex + 1}${rowIndex === 0 || rowIndex === 3 ? "UB" : "LB"}`;
//   };
import React, { useState,useEffect } from "react";
import "./Secondpage.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SeatLayout = ({ totalSeats, onClose }) => {
  //const dispatch=useDispatch();
  const [selectedSeats, setSelectedSeats] = useState(
    Array.from({ length: totalSeats }, () => false)
  );
  const { fromState, toState, selectedDate, trips, selectedTrip } = useSelector(
    (state) => state.travel
  );
  const isAnySeatSelected = selectedSeats.some((seat) => seat);
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState([]);
  const navigate = useNavigate();
  
  const toggleSeatSelection = (seatIndex) => {
    const updatedSelectedSeats = [...selectedSeats];
    updatedSelectedSeats[seatIndex] = !updatedSelectedSeats[seatIndex];

    setSelectedSeats(updatedSelectedSeats);

    const newSelectedSeatNumbers = updatedSelectedSeats.map((selected, index) => {
      if (selected) return getSeatLabel(index);
      return null;
    }).filter(Boolean);

    setSelectedSeatNumbers(newSelectedSeatNumbers);
    console.log(newSelectedSeatNumbers,"lojuj")
    localStorage.setItem('selectedSeats', newSelectedSeatNumbers);
    localStorage.setItem('NoSeats', newSelectedSeatNumbers.length);

    
};

  // const toggleSeatSelection = (seatIndex) => {
  //   const updatedSelectedSeats = [...selectedSeats];
  //   updatedSelectedSeats[seatIndex] = !updatedSelectedSeats[seatIndex];
  //   const seatLabel = getSeatLabel(seatIndex);
  //   if (updatedSelectedSeats[seatIndex]) {
  //     setSelectedSeatNumbers([...selectedSeatNumbers, seatLabel]);
  //   } else {
  //     setSelectedSeatNumbers(
  //       selectedSeatNumbers.filter((number) => number !== seatLabel)
  //     );
  //   }
  //   setSelectedSeats(updatedSelectedSeats);
  //   console.log(selectedSeatNumbers,"kkkk")
  //   dispatch({ type: 'SET_SELECTED_SEATS', payload:selectedSeatNumbers})
  // };

  const handlePayment = () => {
    console.log(selectedSeatNumbers,"komal")
    //dispatch({ type: 'SET_SELECTED_SEATS', payload:selectedSeatNumbers})
    navigate("/passenger");
  };

  const getSeatLabel = (seatIndex) => {
    return `${seatIndex + 1}`;
  };

  // console.log(
  //   selectedSeatNumbers.length,
  //   "k-----------",
  //   selectedTrip[0].busFare
  // );
  const renderRightColumn = () => {
    if (isAnySeatSelected) {
      return (
        <div className="columnRight">
          <div className="rows" style={{ textAlign: "end" }}>
            <FontAwesomeIcon icon={faXmark} onClick={onClose} />
          </div>
          <div className="seat-details rows">
            <div className="boarding-dropping-info">
              <strong>Boarding & Dropping</strong>
              <div className="info">
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <span>Boarding: </span>
                  </div>
                  <div className="col-4" style={{ textAlign: "end" }}>
                    {" "}
                    <span>{fromState}</span>
                  </div>
                  <div className="col-2" style={{ textAlign: "end" }}>
                    {" "}
                    <span>7:55</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <span>Dropping: </span>
                  </div>
                  <div className="col-4" style={{ textAlign: "end" }}>
                    {" "}
                    <span>{toState}</span>
                  </div>
                  <div className="col-2" style={{ textAlign: "end" }}>
                    {" "}
                    <span>{toState}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-line"></div>
            <div className="row">
              <div className="col-12">
                <strong>Fare Details</strong>
              </div>
              <div className="col-6"> Amount: </div>
              <div className="col-6" style={{ textAlign: "end" }}>
                {selectedSeatNumbers.length * selectedTrip[0].busFare}{" "}
              </div>
            </div>
            <div className="visual-line"></div>
            <div className="row">
              <div className="col-6">
                {" "}
                <strong>Seat No.: </strong>
              </div>
              <div className="col-6" style={{ textAlign: "end" }}>
                <span>{selectedSeatNumbers.join(", ")}</span>
              </div>
            </div>

            <Button
              variant="primary"
              className="button"
              onClick={handlePayment}
            >
              PROCEED TO BOOK
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="columnRight">
          <div className="row" style={{ paddingLeft: "95%" }}>
            <FontAwesomeIcon icon={faXmark} onClick={onClose} />
          </div>
          <div>
            <div
              className="row text-center"
              style={{
                background: "red",
                color: "white",
                fontSize: "small",
                margin: "5px 0",
              }}
            >
              Click on an Available seat to proceed with your transaction.
            </div>
            <div class="row ">
              <b>SEAT LEGEND</b>
            </div>
            <div class=" row">
              <div className="col-4">
                <div class="box available"></div> Available
              </div>
              <div className="col-4">
                {" "}
                <div class="box unavailable"></div> Unavailable
              </div>
              <div className="col-4">
                {" "}
                <div class="box selected"></div> Selected
              </div>
            </div>

            <div className="row">
              <b>LB : </b> Lower Berth
            </div>
            <div className="row">
              <b>UB : </b> Upper Berth
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="cons">
      <div className="columnLeft">
        <div className="containers">
          {Array.from({ length: Math.ceil(totalSeats / 7) }).map(
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className={`seat-row ${rowIndex === 1 ? "row-spacing" : ""}`}
              >
                {Array.from({ length: 7 }).map((_, index) => {
                  const seatIndex = rowIndex * 7 + index;
                  if (seatIndex < totalSeats) {
                    return (
                      <div
                        key={seatIndex}
                        className={`seat ${
                          selectedSeats[seatIndex] ? "selected" : ""
                        }`}
                        onClick={() => toggleSeatSelection(seatIndex, rowIndex)}
                      >
                        <span className="seat-label">
                          {getSeatLabel(seatIndex, rowIndex)}
                        </span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )
          )}
        </div>
      </div>

      {renderRightColumn()}
    </div>
  );
};

export default SeatLayout;
