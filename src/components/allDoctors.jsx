import Footer from "./footer";
import Header from "./header";
import axios from "axios";
import { useState, useEffect } from "react";
import "../assets/css/allDoctors.css";
import doctor_img from "../assets/images/ait elkadi.jpeg";
import getUserId from "./getUserId";

const AllDoctors = ({ user }) => {
  const [doctors, setDoctors] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpeciality, setSearchSpeciality] = useState("");

  useEffect(() => {
    requestDoctors();
  }, []);

  const url = "http://localhost/YouCode/Theracure";

  const requestDoctors = async () => {
    await axios
      .get(`${url}/doctors/getAllDoctors`)
      .then((response) => {
        setDoctors(response.data.Doctors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSpeciality = () => {
    const specialities = [];
    doctors.forEach((doctor) => {
      const { speciality } = doctor;
      specialities.push(speciality);
    });
    return specialities;
  };
  const uniq = [...new Set(getSpeciality())];

  return (
    <div>
      <Header user={user} />
      <h1 className="title">Doctors</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search doctor name"
          className="search-doctor"
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
        />
        <select
          onChange={(e) => setSearchSpeciality(e.target.value)}
          className="speciality-search"
          name=""
          id=""
          value={searchSpeciality}
        >
          <option defaultValue="" value="">
            Select a speciality
          </option>
          {uniq.map((i, key) => (
            <option key={key} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="doctors-list">
        {doctors.length > 0 ? (
          doctors
            .filter((doctor) => {
              if (searchName === "" && searchSpeciality === "") {
                return doctor;
              } else if (
                doctor.name.includes(searchName) &&
                doctor.speciality.includes(searchSpeciality)
              ) {
                return doctor;
              }
            })
            .map((doctor, key) =>
              doctor.length === 0 ? (
                <h1>Noo</h1>
              ) : (
                <div key={key} className="doctor-card">
                  <div className="img-card">
                    <img className="doctors-img" src={doctor_img} alt="" />
                  </div>
                  <div className="doctors-info">
                    <h3 className="name">{doctor.name}</h3>
                    <p>{doctor.email}</p>
                  </div>
                  <div className="doctors-speciality">
                    <hr className="line" />
                    <span>{doctor.speciality}</span>
                  </div>
                </div>
              )
            )
        ) : (
          <h1>No doctor found</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default AllDoctors;
