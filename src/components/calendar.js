import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "./modal";

const Calendare = () => {
  const [value, onChange] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(Date.now());

  return (
    <div className="card calendar-card">
      <div className="card-head">
        <h3 className="card-title">Today's schedule</h3>
      </div>
      <Calendar
        onClickDay={(value, e) => {
          setOpenModal(true);
          console.log(value);
        }}
        onChange={onChange}
        value={value}
        minDate={new Date(date)}
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
