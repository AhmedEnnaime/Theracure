import Calendare from "./calendar";
import Doctors from "./doctors";
import Appointment from "./appointments";
import "../assets/css/home.css";

const Home = () => {
  return (
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
  );
};

export default Home;
