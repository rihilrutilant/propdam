import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../Style/CustomerService.css";
const CustomerService = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <section className="container-fluid">
        <div className="customerCard">
          <div className="first_input">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="second_input">
            <input type="text" placeholder="Subject" />
            <input type="number" placeholder="Mobile" />
          </div>
          <div className="message">
            <textarea
              id="w3review"
              name="w3review"
              rows="8"
              cols="50"
              placeholder="Write Message"
            ></textarea>
          </div>
          <div className="msgBtn">
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CustomerService;