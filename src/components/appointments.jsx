import { BsFillTrashFill } from "react-icons/bs";
import doctor_img from "../assets/images/ait elkadi.jpeg";
import axios from "axios";
import { useState, useEffect } from "preact/hooks";

const Appointment = () => {
  // const [appointment, setAppointments] = useState([]);

  // useEffect(() => {
  //   getAppointments();
  // }, []);
  // const url = "http://localhost/YouCode/Theracure";
  // const cancelAppointment = async (schedule_id, id) => {
  //   await axios
  //     .delete(`${url}/appointments/cancelAppointment/${schedule_id}/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       getAppointments();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const getAppointments = async () => {
  //   await axios
  //     .get(`${url}/....`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setAppointments(response.data.Appointments);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className="card appointment-card">
      <div className="card-head">
        <h3 className="card-title">Appointments</h3>
        <span className="element-num">12 appointments</span>
      </div>

      <div className="card-body">
        <ul className="appointment-list">
          <li className="card-item">
            <div className="sides left-side">
              <div className="responsible-doctor">
                <img
                  className="responsible-doctor-img"
                  src={doctor_img}
                  alt=""
                />
                <h4 className="doctor-name">Dr.Mahjour</h4>
              </div>
              <span className="appointment-date">2023-01-22</span>
            </div>
            <div className="sides right-side">
              <span className="appointment-horaire">08:00 am</span>
              <BsFillTrashFill
                //onClick={() => cancelAppointment()}
                className="trash-icon"
              />
            </div>
          </li>
          <hr />
          <li className="card-item">
            <div className="sides left-side">
              <div className="responsible-doctor">
                <img
                  className="responsible-doctor-img"
                  src={doctor_img}
                  alt=""
                />
                <h4 className="doctor-name">Dr.Mahjour</h4>
              </div>
              <span className="appointment-date">2023-01-22</span>
            </div>
            <div className="sides right-side">
              <span className="appointment-horaire">08:00 am</span>
              <BsFillTrashFill className="trash-icon" />
            </div>
          </li>
          <hr />
          <li className="card-item">
            <div className="sides left-side">
              <div className="responsible-doctor">
                <img
                  className="responsible-doctor-img"
                  src={doctor_img}
                  alt=""
                />
                <h4 className="doctor-name">Dr.Mahjour</h4>
              </div>
              <span className="appointment-date">2023-01-22</span>
            </div>
            <div className="sides right-side">
              <span className="appointment-horaire">08:00 am</span>
              <BsFillTrashFill className="trash-icon" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Appointment;
