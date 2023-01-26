import { useState, useEffect, useRef } from "react";
import "react-calendar/dist/Calendar.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../assets/css/calendar.css";
import axios from "axios";
import EventItem from "./event";

const Calendare = () => {
  const [appointments, setAppointments] = useState([]);
  const [showCalendar, setShowCalendar] = useState(true);
  const [eventDate, setEventDate] = useState(new Date());

  useEffect(() => {
    requestAvailableAppointments();
  }, []);

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const getAppointmentsDates = () => {
    const dates = [];
    appointments.forEach((appointment) => {
      const { date } = appointment;
      dates.push({ date: date }, { date: "2023-02-01", color: "#00DCA6" });
    });
    return dates;
  };

  const availableAppointments = getUniqueListBy(getAppointmentsDates(), "date");
  const url = "http://localhost/YouCode/Theracure";
  const requestAvailableAppointments = async () => {
    await axios
      .get(`${url}/available_appointments/getAppointmentsInfo`)
      .then((response) => {
        setAppointments(response.data.Appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card calendar-card">
      <div className="card-head">
        <h3 className="card-title">Today's schedule</h3>
      </div>
      {showCalendar ? (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
          events={availableAppointments}
          dateClick={(info) => {
            appointments.forEach((appointment, key) => {
              if (info.dateStr === appointment.date) {
                console.log(
                  "There are " + appointment.slots_num + " in" + info.dateStr
                );
                console.log(
                  appointment.slots + " Doctor " + appointment.doctor_name
                );
              }
            });
          }}
          eventDisplay="list-item"
          eventClick={(info) => {
            appointments.forEach((appointment, key) => {
              if (info.event.startStr === appointment.date) {
                setEventDate(info.event.startStr);
                setShowCalendar(false);
                console.log(
                  "There are " +
                    appointment.slots_num +
                    " in " +
                    info.event.startStr
                );
                console.log(
                  appointment.slots + " Doctor " + appointment.doctor_name
                );
              }
            });
          }}
          firstDay="1"
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          footerToolbar={{
            right: "today",
            left: "dayGridMonth dayGridWeek dayGridDay",
          }}
          buttonIcons={{
            prev: "chevrons-left",
            next: "chevrons-right",
          }}
        />
      ) : (
        <EventItem
          eventDate={eventDate}
          appointments={appointments}
          open={showCalendar}
        />
      )}
    </div>
  );
};

export default Calendare;
