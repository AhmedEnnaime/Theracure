import { BsFillTrashFill } from "react-icons/bs";
import doctor_img from "../assets/images/ait elkadi.jpeg";
import axios from "axios";
import { useState, useEffect } from "react";
import getUserId from "./getUserId";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/images/undraw_no_data_re_kwbl (1).svg";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = getUserId();
  const url = "http://localhost/YouCode/Theracure";
  const navigate = useNavigate();

  useEffect(() => {
    getAppointments();
  }, []);

  const cancelAppointment = async (schedule_id, id) => {
    await axios
      .delete(`${url}/appointments/cancelAppointment/${schedule_id}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAppointments = async () => {
    await axios
      .get(`${url}/appointments/getLoggedInUserAppointments/${userId}`)
      .then((response) => {
        setAppointments(response.data.Appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card appointment-card">
      <div className="card-head">
        <h3 className="card-title">Appointments</h3>
        <span className="element-num">{appointments.length} appointments</span>
      </div>

      <div className="card-body">
        <ul className="appointment-list">
          {appointments.length ? (
            appointments.map((appointment, key) => (
              <>
                <li className="card-item" key={key}>
                  <div className="sides left-side">
                    <div className="responsible-doctor">
                      <img
                        className="responsible-doctor-img"
                        src={doctor_img}
                        alt=""
                      />
                      <h4 className="doctor-name">
                        Dr.{appointment.doctor_name}
                      </h4>
                    </div>
                    <span className="appointment-date">{appointment.date}</span>
                  </div>
                  <div className="sides right-side">
                    <span className="appointment-horaire">
                      {appointment.slot}
                    </span>
                    <BsFillTrashFill
                      onClick={() =>
                        cancelAppointment(
                          appointment.schedule_id,
                          appointment.id
                        )
                      }
                      className="trash-icon"
                    />
                  </div>
                  <input type="hidden" value={appointment.schedule_id} />
                  <input type="hidden" value={appointment.id} />
                </li>
                <hr />
              </>
            ))
          ) : (
            <img className="not-found" src={notFound} alt="" />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Appointment;
