import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "./modal";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../assets/css/calendar.css";
import axios from "axios";

const Calendare = () => {
  const [openModal, setOpenModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // const handleDateClick = () => {
  //   setOpenModal(true);
  // };
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
      dates.push({ date: date });
    });
    return dates;
  };

  const availableAppointments = getUniqueListBy(getAppointmentsDates(), "date");
  console.log(availableAppointments);
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
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
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
        firstDay="1"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        footerToolbar={{
          right: "today",
        }}
        buttonIcons={{
          prev: "chevrons-left",
          next: "chevrons-right",
        }}
        // navLinks={true}
        // navLinkDayClick={(date) => {
        //   console.log(date.toISOString().split("T")[0]);
        // }}
        // eventClick={{}}
      />
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
};

export default Calendare;
