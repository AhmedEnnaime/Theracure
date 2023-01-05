import { useState } from "react";
import img from "../assets/images/Untitled_design-14-removebg-preview.png";

const Modal = ({ open, onClose }) => {
  const [time, setTime] = useState("");
  const handleChange = (e) => {
    setTime(e.target.value);
    console.log(e.target.value);
  };
  if (!open) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="modalContainer">
        <img className="img_calendar" src={img} alt="" />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <div className="content">
            <div className="time">
              <input
                className="time_input"
                type="radio"
                name="time_available"
                id=""
                value="8:00 am"
                onClick={handleChange}
              />
              <label htmlFor="8:00 AM">8:00 AM</label>
            </div>
            <div className="time">
              <input
                className="time_input"
                type="radio"
                name="time_available"
                id=""
                value="10:00 am"
                onClick={handleChange}
              />
              <label htmlFor="10:00 AM">10:00 AM</label>
            </div>
            <div className="time">
              <input
                className="time_input"
                type="radio"
                name="time_available"
                id=""
                value="12:00 am"
                onClick={handleChange}
              />
              <label htmlFor="10:00 AM">12:00 AM</label>
            </div>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">Take appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
