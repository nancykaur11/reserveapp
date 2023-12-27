// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Payment from '../Payment/Payment';

// export function PassengerInfo({ totalSeats,selectedSeat }) {
//   const [showPayment, setShowPayment] = useState(false);
//   const [isRazorpayScriptLoaded, setIsRazorpayScriptLoaded] = useState(false);

//  console.log(totalSeats,"hh",selectedSeat)
//   const initialPassengerInfo = Array.from(
//     { length: totalSeats },
//     (_, seat) => ({
//       seat: seat + 1,
//       seat:selectedSeat,
//       name: "",
//       age: "",
//       gender: "",
//     })
//   );

//   const [passengerInfo, setPassengerInfo] = useState(initialPassengerInfo);
//   const [contactInfo, setContactInfo] = useState({ mobile: "" });

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => setIsRazorpayScriptLoaded(true);
//     document.body.appendChild(script);
//   }, []);

//   const handleInputChange = (e, seat) => {
//     const { name, value } = e.target;
//     setPassengerInfo((prevInfo) =>
//       prevInfo.map((passenger) =>
//         passenger.seat === seat ? { ...passenger, [name]: value } : passenger
//       )
//     );
//   };

//   const handleContactInputChange = (e) => {
//     const { name, value } = e.target;
//     setContactInfo({ ...contactInfo, [name]: value });
//   };

//   const handlePaymentSuccess = async (response) => {
//     try {
//       const verifyResponse = await axios.post('/verify', {
//         razorpay_order_id: response.razorpay_order_id,
//         razorpay_payment_id: response.razorpay_payment_id,
//         razorpay_signature: response.razorpay_signature,
//       });
//       if (verifyResponse.data.message === "Payment verified successfully") {
//         console.log("Payment successful");
//       } else {
//         console.log("Payment unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error in payment verification:", error);
//     }
//   };

//   const handlePayment = async () => {
//     // Add form validation logic here
//     // const errors = validateForm();
//     // if (Object.keys(errors).length === 0) {
//       try {
//         const orderResponse = await axios.post('http://localhost:3000/orders', { amount: 350 });
//         if (orderResponse.data && isRazorpayScriptLoaded) {
//           const options = {
//             key: 'rzp_test_ISZIkTa5BDsapy',
//             amount: orderResponse.data.data.amount,
//             currency: orderResponse.data.data.currency,
//             name: 'Your Company Name',
//             description: 'Payment for order',
//             order_id: orderResponse.data.data.id,
//             handler: handlePaymentSuccess,
//             prefill: {
//               name: contactInfo.name, // Ensure this field is captured in contact info
//               email: contactInfo.email, // Ensure this field is captured in contact info
//               contact: contactInfo.mobile,
//             },
//             theme: {
//               color: '#F37254'
//             }
//           };
//           const paymentObject = new window.Razorpay(options);
//           paymentObject.open();
//         }
//       } catch (error) {
//         console.error("Error in payment process:", error);
//       }
//     // }
//   };

//   return (
//     <div className="detail-box">
//       {passengerInfo.map((passenger) => (
//         <div className="container-box" key={passenger.seat}>
//           <h4>Passenger: {passenger.seat}</h4>
//           <h6>Seat Number: {passenger.selectedSeat}</h6>
//           <form>
//             <div className="row">
//               <div className="col-6">
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={passenger.name}
//                   onChange={(e) => handleInputChange(e, passenger.seat)}
//                 />
//               </div>
//               <div className="col-6">
//                 <label>Age:</label>
//                 <input
//                   type="text"
//                   name="age"
//                   value={passenger.age}
//                   onChange={(e) => handleInputChange(e, passenger.seat)}
//                 />
//               </div>
//               <div>
//                 <label style={{paddingLeft:"10px"}}>Gender:</label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={passenger.gender === "Male"}
//                   onChange={(e) => handleInputChange(e, passenger.seat)}
//                   style={{paddingRight:"2px"}}
//                 />
//                 <label>Male</label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={passenger.gender === "Female"}
//                   onChange={(e) => handleInputChange(e, passenger.seat)}
//                 />
//                 <label>Female</label>
//               </div>
//             </div>
//           </form>
//         </div>
//       ))}

//       <form className="container-box">
//         <h3>Contact Information</h3>
//         <div>
//           <label>Mobile Number:</label>
//           <input
//             type="text"
//             name="mobile"
//             value={contactInfo.mobile}
//             onChange={handleContactInputChange}
//           />
//         </div>
//       </form>

//       <div className="text-center">
//         <button className="btn btn-primary" onClick={handlePayment}>PROCEED TO PAY</button>
//       </div>

//       {showPayment && (
//         <div className="payment-overlay">
//           <Payment />
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import Payment from "../Payment/Payment";
import { useSelector } from "react-redux";

export function PassengerInfo({ totalSeats, selectedSeat, date, busName }) {
  // State to manage whether to show the payment section
  const [showPayment, setShowPayment] = useState(false);
  const { selectedTrip } = useSelector(
    (state) => state.travel
  );
  const cost=selectedTrip[0].busFare;
  const [isRazorpayScriptLoaded, setIsRazorpayScriptLoaded] = useState(false);

 
  const initialPassengerInfo = Array.from(
    { length: totalSeats },
    (_, seat) => ({
      seat: seat + 1,
      name: "",
      age: "",
      gender: "Male", // Default gender to Male
    })
  );

  // State to store passenger information
  const [passengerInfo, setPassengerInfo] = useState(initialPassengerInfo);

  // State to store contact information
  const [contactInfo, setContactInfo] = useState({ mobile: "" });

  // State to store validation errors
  const [validationErrors, setValidationErrors] = useState([]);

  // Load the Razorpay script when the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setIsRazorpayScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  // Handle input changes for passenger details
  const handleInputChange = (e, seat) => {
    const { name, value } = e.target;
    setPassengerInfo((prevInfo) =>
      prevInfo.map((passenger) =>
        passenger.seat === seat ? { ...passenger, [name]: value } : passenger
      )
    );
  };

  // Handle input changes for contact information
  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  // Handle payment success
  const handlePaymentSuccess = async (response) => {
    try {
      const verifyResponse = await axios.post("/verify", {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });
      if (verifyResponse.data.message === "Payment verified successfully") {
        console.log("Payment successful");
      } else {
        console.log("Payment unsuccessful");
      }
    } catch (error) {
      console.error("Error in payment verification:", error);
    }
  };

  const displayPassengerInfo = () => {
    const passengerData = {};
  
    passengerInfo.forEach((passenger, index) => {
      console.log(passenger,index,passenger.name)
        // Name: passenger.name;
        // Age: passenger.age;
        // Gender: passenger.gender;
        // Name:passenger.name
      
     
    });
  
    passengerData["Contact Number"] = contactInfo.mobile;
  
    console.log(passengerData);
  };
  
  // Example usage:
  displayPassengerInfo();
  
  // Validate the form before proceeding to payment
  const validateForm = () => {
    const errors = [];
    const nameValidationRegex = /^[a-zA-Z]+$/;

    let passengerDetailsIncomplete = false; 
  
    passengerInfo.forEach((passenger) => {
      if (!passenger.name || !passenger.age || !passenger.gender) {
        passengerDetailsIncomplete = true; 
      }
    });
  
    if (passengerDetailsIncomplete) {
      errors.push("Please fill in all details for Passenger");
    }
  
    if (!contactInfo.mobile) {
      errors.push("Please provide a 10-digit mobile number.");
    }
  
    setValidationErrors(errors);
    return errors;
  };
  const handlePayment = async () => {
    const errors = validateForm();
    if (errors.length === 0) {
      try {
        const orderResponse = await axios.post("http://localhost:3000/orders", {
          amount: cost*totalSeats,
        });
        if (orderResponse.data) {
            console.log(orderResponse,"orderResponse")
            if (isRazorpayScriptLoaded) {
              const options = {
                key: 'rzp_test_ISZIkTa5BDsapy',
                amount: orderResponse.data.data.amount,
                currency: orderResponse.data.data.currency,
                name: 'Reserve Bus App',
                description: 'Payment for order',
                order_id: orderResponse.data.data.id,
                handler: handlePaymentSuccess,
                prefill: {
                  name: passengerInfo.name,
                  age: passengerInfo.age,
                  contact: contactInfo.mobile,
                },
                theme: {
                  color: '#F37254'
                }
              };
              const paymentObject = new window.Razorpay(options);
              paymentObject.open();
            }
          }
      } catch (error) {
        console.error("Error in payment process:", error);
      }
    }
  };

  return (
    <div className="detail-box">
      {passengerInfo.map((passenger) => {
        return (
          <div className="container-box" key={passenger.seat}>
            <h4>Passenger: {passenger.seat}</h4>
            <form>
              <div className="row">
                <div className="col-6">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={passenger.name}
                    onChange={(e) => handleInputChange(e, passenger.seat)}
                  />
                </div>
                <div className="col-6">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={passenger.age}
                    onChange={(e) => handleInputChange(e, passenger.seat)}
                  ></input>
                </div>
                <div>
                  <label style={{ paddingLeft: "10px" }}>Gender:</label>
                  <input
                    type="radio"
                    name={`gender-${passenger.seat}`}
                    value="Male"
                    checked={passenger.gender === "Male"}
                    onChange={(e) => handleInputChange(e, passenger.seat)}
                    style={{ paddingRight: "2px" }}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    name={`gender-${passenger.seat}`}
                    value="Female"
                    checked={passenger.gender === "Female"}
                    onChange={(e) => handleInputChange(e, passenger.seat)}
                  />
                  <label>Female</label>
                </div>
              </div>
            </form>
          </div>
        );
      })}

      <form className="container-box">
        <h3>Contact Information</h3>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={contactInfo.mobile}
            onChange={handleContactInputChange}
          />
        </div>
        {validationErrors.length > 0 && (
          <div className="error-messages" style={{ color: "red" }}>
            {validationErrors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </form>

      <div className="text-center">
        <button className="btn btn-primary" onClick={handlePayment}>
          PROCEED TO PAY
        </button>
      </div>

      {showPayment && (
        <div className="payment-overlay">
          <Payment />
        </div>
      )}
    </div>
  );
}
