import doctor_img from "../assets/images/ait elkadi.jpeg";
import axios from "axios";
import "../assets/css/home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorsNum, setDoctorsNum] = useState([]);
  useEffect(() => {
    requestDoctors();
    DoctorsNum();
  }, []);

  const url = "http://localhost/YouCode/Theracure";
  async function requestDoctors() {
    await axios
      .get(`${url}/doctors/getAllDoctors`)
      .then((response) => {
        setDoctors(response.data.Doctors);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function DoctorsNum() {
    await axios
      .get(`${url}/doctors/getDoctorsNum`)
      .then((response) => {
        setDoctorsNum(response.data.doctors);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="card doctors-card">
      <div className="card-head">
        <h3 className="card-title">Doctors</h3>
        <span className="element-num">{doctorsNum} doctors</span>
      </div>
      <div className="card-body">
        <ul className="doctor-list">
          {doctors.slice(0, 9).map((doctor, key) => (
            <li key={key} className="card-item">
              <img src={doctor_img} className="doctor-img" alt="doctor-img" />
              <h4 className="doctor-name">{doctor.name}</h4>
              <span className="location">{doctor.speciality}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <hr className="line" />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/doctors"}
        >
          <p>View All Doctors</p>
        </Link>
      </div>
    </div>
  );
};

export default Doctors;
