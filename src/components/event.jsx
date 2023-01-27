import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserId from "./getUserId";

const EventItem = ({ eventDate, appointments, open }) => {
  const [appointmentInfo, setAppointmentInfo] = useState({});
  const url = "http://localhost/YouCode/Theracure";
  const navigate = useNavigate();
  const userId = getUserId();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAppointmentInfo((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${url}/appointments/takeAppointment/${userId}`, appointmentInfo)
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          console.log("appointment taken successfully");
          //navigate("/");
        } else {
          console.log(appointmentInfo);
          console.log("failed to take appointment");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="horraires-list">
      <FaTimes
        className="close-btn"
        onClick={() => {
          open(true);
        }}
      />
      <form action="" onSubmit={handleSubmit} className="horraires-list">
        <h3>Schedule of {eventDate}</h3>
        {appointments.length ? (
          appointments.map((appointment, key) => (
            <>
              {eventDate === appointment.date && (
                <div key={key} className="horraire-row">
                  <input
                    type="radio"
                    name="schedule_id"
                    className="schedule"
                    value={appointment.schedule_id}
                    onChange={handleChange}
                  />
                  <label htmlFor="">{appointment.slots}</label>
                </div>
              )}
            </>
          ))
        ) : (
          <h3>No appointments available</h3>
        )}
        <input
          onChange={handleChange}
          type="hidden"
          name="date"
          value={eventDate}
        />
        <input
          type="hidden"
          name="user_id"
          value={userId}
          onChange={handleChange}
        />
        <button className="submit-btn" type="submit">
          Take appointment
        </button>
      </form>
    </div>
  );
};

export default EventItem;
