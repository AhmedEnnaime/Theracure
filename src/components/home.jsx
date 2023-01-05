import Calendare from "./calendar";
import Doctors from "./doctors";
import Appointment from "./appointments";
import Header from "./header";
import Footer from "./footer";
import "../assets/css/home.css";

const Home = () => {
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
