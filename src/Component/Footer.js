import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Footer.css';
import logo from "./icon/logo.png"
export function Footer() {
  return (
   
      <div className=" footer container-fluid">

        <div className="row">
          <div className="column logo-column">
            
              <img style={{paddingRight:"50%"}} src={logo} alt="Bus Logo" className="bus-logo" />
            
            <p style={{paddingRight:"40%",paddingLeft:"10%"}}>Bus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally.</p>
          </div>

          <div className="column about-column">
            <h6>ABOUT</h6>
            <Link to="/about-us">About Us</Link><br/>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <div className="column follow-us-column">
            <h6>FOLLOW US</h6>
            <Link to="/careers">Careers</Link><br/>
            <Link to="/faq">FAQ</Link><br/>
            <Link to="/blogs">Blogs</Link>
          </div>

          <div className="column routes-column">
            <h6>TOP BUS ROUTES</h6>
            <Link to="/mumbai-bangalore">Mumbai to Bangalore </Link><br/>
            <Link to="/bangalore-chennai">Bangalore to Chennai </Link><br/>
            <Link to="/pune-bangalore">Pune to Bangalore </Link>
          </div>
        </div>
      </div>
    
  );
}
