
// import React from "react";
// import Razorpay from "razorpay";

// const loadRazorpay = (src) => {
//   return new Promise((resolve) => {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// const PaymentButton = () => {
//   const handlePayment = async () => {
//     const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//       alert('Razorpay SDK failed to load. Are you online?');
//       return;
//     }

//     const options = {
//       key: "rzp_test_ISZIkTa5BDsapy",
//       currency: "INR",
//       amount: "50000",
//       name: "Your App Name",
//       description: "Some Description",
//       order_id: "order_29QQoUBi66nOZg", 
//       handler: function (response) {
//         // Handle the payment success
//         console.log(response);
//         // You can call your backend API to verify the payment here
//       },
//       prefill: {
//         name: "",
//         email: "",
//         contact: "",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#61dafb",
//       },
//     };

//     const paymentObject = new Razorpay(options);
//     paymentObject.open();
//   };

//   return <button onClick={handlePayment}>Pay with Razorpay</button>;
// };

// export default PaymentButton;