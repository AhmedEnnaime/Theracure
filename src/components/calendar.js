import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "./modal";

const Calendare = () => {
  const [value, onChange] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="card calendar-card">
      <div className="card-head">
        <h3 className="card-title">Today's schedule</h3>
      </div>
      <Calendar
        onClickDay={() => setOpenModal(true)}
        onChange={onChange}
        value={value}
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
