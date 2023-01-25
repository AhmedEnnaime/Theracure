import Calendare from "./calendar";
import Doctors from "./doctors";
import Appointment from "./appointments";
import Header from "./header";
import Footer from "./footer";
import "../assets/css/home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserId from "./getUserId";
import axios from "axios";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const url = "http://localhost/YouCode/Theracure";

  useEffect(() => {
    const check = localStorage.getItem("jwt");
    if (!check) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header user={user} />
      <section id="home">
        <div className="greeting">
          <span>👋</span>
          <h1 className="greeting">Welcome Back {user.name}</h1>
        </div>
        <div className="cards-container">
          <Calendare />
          <Doctors />
          <Appointment />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
