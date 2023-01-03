import doctor_img from "../assets/images/ait elkadi.jpeg";
import axios from "axios";
import "../assets/css/home.css";
import { useState, useEffect } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    requestDoctors();
  }, []);

  const url = "http://localhost/YouCode/Theracure";
  async function requestDoctors() {
    const res = await axios
      .get(`${url}/doctors/getAllDoctors`)
      .then((response) => {
        console.log(response.data.Doctors);
        setDoctors(response.data.Doctors);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="card doctors-card">
      <div className="card-head">
        <h3 className="card-title">Doctors</h3>
        <span>12 doctors</span>
      </div>
      <div className="card-body">
        <ul className="doctor-list">
          {doctors.map((doctor, key) => (
            <li key={key} className="card-item">
              <img src={doctor_img} className="doctor-img" alt="doctor-img" />
              <h4 className="doctor-name">{doctor.name}</h4>
              <span className="location">{doctor.speciality}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Doctors;
