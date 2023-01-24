import Calendare from "./calendar";
import Doctors from "./doctors";
import Appointment from "./appointments";
import Header from "./header";
import Footer from "./footer";
import "../assets/css/home.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check = localStorage.getItem("jwt");
    console.log(check);
    if (!check) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header />
      <section id="home">
        <div className="greeting">
          <span>👋</span>
          <h1 className="greeting">Welcome Back Ahmed</h1>
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
