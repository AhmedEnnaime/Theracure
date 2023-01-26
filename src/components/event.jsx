import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { useState, useNavigate } from "react";
import getUserId from "./getUserId";

const EventItem = ({ eventDate, appointments, open }) => {
  const [appointmentInfo, setAppointmentInfo] = useState({});
  const url = "http://localhost/YouCode/Theracure";
  const navigate = useNavigate();
  const userId = getUserId();

  const handleSubmit = async () => {
    await axios
      .post(`${url}/takeAppointment/${userId}`, appointmentInfo)
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          console.log("appointment taken successfully");
          //navigate("/");
        } else {
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
        onClick={() => {
          open = false;
          //setShowCalendar(true);
        }}
      />
      <h3>5 horraies available</h3>
      <h3>clicked date is {eventDate}</h3>
      {appointments.length ? (
        appointments.map((appointment, key) => (
          <>
            {eventDate === appointment.date && (
              <div>
                <p>{appointment.slots}</p>
                <p>{appointment.schedule_id}</p>
              </div>
            )}
          </>
        ))
      ) : (
        <h3>No appointments available</h3>
      )}

      {/* <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html">HTML</label>
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label for="css">CSS</label>
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label for="javascript">JavaScript</label> */}
    </div>
  );
};

export default EventItem;
