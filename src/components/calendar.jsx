import { useState, useEffect, useRef } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "./modal";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../assets/css/calendar.css";
import axios from "axios";
//import EventItem from "./event";

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

  // const calendarRef = useRef(null);

  // const handleEventClick = () => {
  //   //calendarRef.current.getApi().gotoDate(event.event.start);
  //   calendarRef.current.getApi().changeView("dayGridDay");
  // };

  return (
    <div className="card calendar-card">
      <div className="card-head">
        <h3 className="card-title">Today's schedule</h3>
      </div>
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
        // eventClick={handleEventClick}
        // eventContent={(info) => {
        //   <EventItem info={info} />;
        // }}
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
        //navLinks={true}
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
