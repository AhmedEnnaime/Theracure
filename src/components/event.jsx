import { FaTimes } from "react-icons/fa";
const EventItem = ({ eventDate, appointments }) => {
  console.log(appointments);
  return (
    <div className="horraires-list">
      <FaTimes
        onClick={() => {
          //setShowCalendar(true);
        }}
      />
      <h3>5 horraies available</h3>
      <h3>clicked date is {eventDate}</h3>
      {appointments.length ? (
        appointments.map((appointment, key) => (
          <>{eventDate === appointment.date && <p>{appointment.slots}</p>}</>
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
