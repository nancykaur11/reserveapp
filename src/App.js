// import React,{ useEffect, useState }  from "react";
// //import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./Homepage/Homepage";
// import Payment from "./Payment/Payment";
// import {SecondPage} from "./SecondPage/Secondpage";
// import { Passenger } from "./Passenger";
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const isPageReloaded = () => {
//         return window.performance.navigation.type === 1;
//     };

//     if (isPageReloaded()) {
//         navigate('/');
//     }
// }, [navigate]);
//   return (
   
//     <Router>
      
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/destination" element={<SecondPage />} />
//           <Route path="/passenger" element={<Passenger />} />
//         </Routes>
   
//     </Router>
  
//   );
// }

// export default App;








// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage/Homepage";
import Payment from "./Payment/Payment";
import { SecondPage } from "./SecondPage/Secondpage";
import { Passenger } from "./Passenger";
import { PassengerInfo } from './Component/PassengerInfo';
import RedirectOnRefresh from './RedirectOnRefresh'; // Import the component

function App() {
  return (
    <Router>
      {/* <RedirectOnRefresh /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/destination" element={<SecondPage />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/passengerInfo" element={<PassengerInfo />} />
      </Routes>
    </Router>
  );
}

export default App;

