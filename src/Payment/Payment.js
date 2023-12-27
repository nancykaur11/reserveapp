// import React from 'react';
// import './Payment.css'; 

// function PaymentComponent() {
//   return (
//     <div className="payment-container">
//       <div className="bus-details">
//         <h2>Shiv Shakti</h2>
//         <p>05:15 - mango bus stand</p>
//       </div>
//       <div className="passenger-info">
     
//         <h3>Passenger Information</h3>
//         <div className='boxContainer'>
//         <div className="seat-info text-start">
//           <b>Passenger 1 : </b> Seat 28
//         </div>
        
//         <div className="name">
//           <label>Name</label>
//           <input type="text" placeholder="Name" />
//         </div><br/>
//         <div className="gender">
//           <label>Gender : </label>
//           <input type="radio" name="gender" value="Male" /> Male
//           <input type="radio" name="gender" value="Female" /> Female
//         </div>
//         <div className="age">
//           <label>Age</label>
//           <input type="text" placeholder="Age" />
//         </div><br/>
//         <div className="city">
//           <label>City of Residence</label>
//           <input type="text" placeholder="City of Residence" />
//         </div><br/>
//         <div className="state">
//           <label>State of Residence</label>
//           <input type="text" placeholder="State of Residence" />
//         </div><br/>
//       </div>
//       </div>
//       <div className="contact-details">
//         <h3>Contact Details</h3>
//         <div className='boxContainer'>
//         <div className="email">
//           <label>Email ID</label>
//           <input type="email" placeholder="Email ID" />
//         </div><br/>
//         <div className="phone">
//           <label>Phone</label>
//           <input type="tel" placeholder="Phone" />
//         </div>
//       </div>
//       <div className="payment-info">
//         <p>Total Amount: INR 350.00</p>
//         <button>PROCEED TO PAY</button>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentComponent;







// import React, { useState } from 'react';
// import './Payment.css';

// function Payment() {
//   // Define state variables to store form values and form errors
//   const [formValues, setFormValues] = useState({
//     name: '',
//     age: '',
//     email: '',
//     phone: '',
//   });
//   const [formErrors, setFormErrors] = useState({});

//   // Function to handle changes in form input fields
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   // Function to validate the form
  // const validateForm = () => {
  //   const errors = {};
  //   const regexName = /^[a-zA-Z ]*$/;
  //   const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   const regexPhone = /^\d{10}$/;

  //   // Check name field
  //   if (!formValues.name || !regexName.test(formValues.name)) {
  //     errors.name = "Name must be letters only.";
  //   }

  //   // Check age field
  //   if (!formValues.age || formValues.age > 100) {
  //     errors.age = "Age must be 100 or less.";
  //   }

  //   // Check email field
  //   if (!formValues.email || !regexEmail.test(formValues.email)) {
  //     errors.email = "Please enter a valid email address.";
  //   }

  //   // Check phone field
  //   if (!formValues.phone || !regexPhone.test(formValues.phone)) {
  //     errors.phone = "Please enter a valid phone number.";
  //   }

  //   // Set form errors
  //   setFormErrors(errors);

  //   // Check if there are no errors, and log "ok" to the console if the form is valid
  //   if (Object.keys(errors).length === 0) {
  //     console.log('ok');
  //   }
  // };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     validateForm();
//   };

//   return (
    // <div className="payment-container">
    //   <form onSubmit={handleSubmit}>
    //     <div className="bus-details">
    //       <h2>Shiv Shakti</h2>
    //       <p>05:15 - mango bus stand</p>
    //     </div>
    //     <div className="passenger-info">
    //       <h3>Passenger Information</h3>
    //       <div className='boxContainer'>
    //         <div className="seat-info text-start">
    //           <b>Passenger 1 : </b> Seat 28
    //         </div>
    //         <div className="name">
    //           <label>Name</label>
    //           <input
    //             type="text"
    //             placeholder="Name"
    //             name="name"
    //             value={formValues.name}
    //             onChange={handleChange}
    //           />
    //           {formErrors.name && <p className="error">{formErrors.name}</p>}
    //         </div><br/>
    //         <div className="gender">
    //           <label>Gender : </label>
    //           <input type="radio" name="gender" value="Male" /> Male
    //           <input type="radio" name="gender" value="Female" /> Female
    //         </div>
    //         <div className="age">
    //           <label>Age</label>
    //           <input
    //             type="text"
    //             placeholder="Age"
    //             name="age"
    //             value={formValues.age}
    //             onChange={handleChange}
    //           />
    //           {formErrors.age && <p className="error">{formErrors.age}</p>}
    //         </div><br/>
    //         <div className="city">
    //           <label>City of Residence</label>
    //           <input type="text" placeholder="City of Residence" />
    //         </div><br/>
    //         <div className="state">
    //           <label>State of Residence</label>
    //           <input type="text" placeholder="State of Residence" />
    //         </div><br/>
    //       </div>
    //     </div>
    //     <div className="contact-details">
    //       <h3>Contact Details</h3>
    //       <div className='boxContainer'>
    //         <div className="email">
    //           <label>Email ID</label>
    //           <input
    //             type="email"
    //             placeholder="Email ID"
    //             name="email"
    //             value={formValues.email}
    //             onChange={handleChange}
    //           />
    //           {formErrors.email && <p className="error">{formErrors.email}</p>}
    //         </div><br/>
    //         <div className="phone">
    //           <label>Phone</label>
    //           <input
    //             type="tel"
    //             placeholder="Phone"
    //             name="phone"
    //             value={formValues.phone}
    //             onChange={handleChange}
    //           />
    //           {formErrors.phone && <p className="error">{formErrors.phone}</p>}
    //         </div>
    //       </div>
    //     </div>
//         <div className="payment-info">
//           <p>Total Amount: INR 350.00</p>
//           <button type="submit">PROCEED TO PAY</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Payment;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Payment.css';
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Payment({onClose}) {
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isRazorpayScriptLoaded, setRazorpayScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setRazorpayScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const validateForm = () => {
  //   const errors = {};
  //   // Validation logic here
  //   return errors;
  // };


  const validateForm = () => {
    const errors = {};
    const regexName = /^[a-zA-Z ]*$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPhone = /^\d{10}$/;
    if (!formValues.name || !regexName.test(formValues.name)) {
      errors.name = "Name must be letters only.";
    }
    if (!formValues.age || formValues.age > 100) {
      errors.age = "Age must be 100 or less.";
    }
    if (!formValues.email || !regexEmail.test(formValues.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formValues.phone || !regexPhone.test(formValues.phone)) {
      errors.phone = "Please enter a valid phone number.";
    }
    setFormErrors(errors);if (Object.keys(errors).length === 0) {
      console.log('ok');
    }
    return errors;
  };
  const handlePaymentSuccess = async (response) => {
    try {
      const verifyResponse = await axios.post('/verify', {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });
      if (verifyResponse.data.message === "Payment verified successfully") {
        console.log("payment successfully")
      } else {
        console.log("payment unsuccessfully")
      }
    } catch (error) {
      console.log(error,"errors")
    }
  };

  const handlePayment = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      
      try {
        const orderResponse = await axios.post('http://localhost:3000/orders', { amount: 350 });
           console.log(orderResponse,"orderResponse")
        if (orderResponse.data) {
          console.log(orderResponse,"orderResponse")
          if (isRazorpayScriptLoaded) {
            const options = {
              key: 'rzp_test_ISZIkTa5BDsapy',
              amount: orderResponse.data.data.amount,
              currency: orderResponse.data.data.currency,
              name: 'Your Company Name',
              description: 'Payment for order',
              order_id: orderResponse.data.data.id,
              handler: handlePaymentSuccess,
              prefill: {
                name: formValues.name,
                email: formValues.email,
                contact: formValues.phone,
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
        console.log(error,"errors in this")
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="payment-container">
      <form onSubmit={(event) => event.preventDefault()}>
      {/* <div className="payment-container">
      <form onSubmit={handleSubmit}> */}
        {/* <div className="bus-details">
          <h2>Shiv Shakti</h2>
          <div className='flexx'>
          <p className='flexx1'>05:15 - mango bus stand</p> 
          <div className='flexx2'><FontAwesomeIcon icon={faXmark}  onClick={onClose} /></div>
          </div>
        </div> */}
        {/* <div className="passenger-info">
          <h3>Passenger Information</h3>
          <div className='boxContainer'>
            <div className="seat-info text-start">
              <b>Passenger 1 : </b> Seat 28
            </div>
            <div className="name">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="error">{formErrors.name}</p>}
            </div><br/>
            <div className="gender">
              <label>Gender : </label>
              <input type="radio" name="gender" value="Male" /> Male
              <input type="radio" name="gender" value="Female" /> Female
            </div>
            <div className="age">
              <label>Age</label>
              <input
                type="text"
                placeholder="Age"
                name="age"
                value={formValues.age}
                onChange={handleChange}
              />
              {formErrors.age && <p className="error">{formErrors.age}</p>}
            </div><br/>
            <div className="city">
              <label>City of Residence</label>
              <input type="text" placeholder="City of Residence" />
            </div><br/>
            <div className="state">
              <label>State of Residence</label>
              <input type="text" placeholder="State of Residence" />
            </div><br/>
          </div>
        </div>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <div className='boxContainer'>
            <div className="email">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Email ID"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
            </div><br/>
            <div className="phone">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              {formErrors.phone && <p className="error">{formErrors.phone}</p>}
            </div>
          </div>
        </div> */}
        <div className="payment-info">
          {/* <p>Total Amount: INR 350.00</p> */}
          <button type="button" onClick={handlePayment}>PROCEED TO PAY</button>
        </div>
      </form>
    </div>
  );
}

export default Payment;

