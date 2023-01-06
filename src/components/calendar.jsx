import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "./modal";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import "../assets/css/calendar.css";

const Calendare = () => {
  const [value, onChange] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(Date.now());
  // const handleDateClick = () => {
  //   // bind with an arrow function
  //   setOpenModal(true);
  // };
  return (
    <div className="card calendar-card">
      <div className="card-head">
        <h3 className="card-title">Today's schedule</h3>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[{ date: "2023-01-12" }, { date: "2023-01-18" }]}
        // dateClick={handleDateClick}
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
        navLinks={true}
        navLinkDayClick={(date) => {
          console.log(date.toISOString().split("T")[0]);
        }}
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
