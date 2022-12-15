import doctor_img from "../assets/images/ait elkadi.jpeg";
import "../assets/css/home.css";

const Doctors = () => {
  return (
    <div className="card doctors-card">
      <div className="card-head">
        <h3 className="card-title">Doctors</h3>
        <span>12 doctors</span>
      </div>
      <div className="card-body">
        <ul className="doctor-list">
          <li className="card-item">
            <img src={doctor_img} className="doctor-img" alt="doctor-img" />
            <h4 className="doctor-name">Dr.bensouda</h4>
            <span className="location">Chirugien</span>
          </li>

          <li className="card-item">
            <img src={doctor_img} className="doctor-img" alt="doctor-img" />
            <h4 className="doctor-name">Dr.bensouda</h4>
            <span className="location">Generaliste</span>
          </li>

          <li className="card-item">
            <img src={doctor_img} className="doctor-img" alt="doctor-img" />
            <h4 className="doctor-name">Dr.bensouda</h4>
            <span className="location">Generaliste</span>
          </li>

          <li className="card-item">
            <img src={doctor_img} className="doctor-img" alt="doctor-img" />
            <h4 className="doctor-name">Dr.bensouda</h4>
            <span className="location">Therapiste</span>
          </li>

          <li className="card-item">
            <img src={doctor_img} className="doctor-img" alt="doctor-img" />
            <h4 className="doctor-name">Dr.bensouda</h4>
            <span className="location">Therapiste</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Doctors;
