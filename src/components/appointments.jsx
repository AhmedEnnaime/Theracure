import { BsFillTrashFill } from "react-icons/bs";

const Appointment = () => {
  return (
    <div className="card appointment-card">
      <div className="card-head">
        <h3 className="card-title">Appointments</h3>
        <span className="element-num">12 appointments</span>
      </div>

      <div className="card-body">
        <ul className="appointment-list">
          <li className="card-item">
            <div className="sides left-side">
              <h5 className="doctor-name">Dr.Mahjour</h5>
              <span className="appointment-date">2023-01-22</span>
            </div>
            <div className="sides right-side">
              <span className="appointment-horaire">08:00 am</span>
              <BsFillTrashFill className="trash-icon" />
            </div>
          </li>
          <hr />
          <li className="card-item">
            <div className="sides left-side">
              <h5 className="doctor-name">Dr.Mahjour</h5>
              <span className="appointment-date">2023-01-22</span>
            </div>
            <div className="sides right-side">
              <span className="appointment-horaire">08:00 am</span>
              <BsFillTrashFill className="trash-icon" />
            </div>
          </li>
          <hr />
          <li className="card-item">
            <div className="sides left-side">
              <h5 className="doctor-name">Dr.Mahjour</h5>
              <span className="appointment-date">2023-01-22</span>
            </div>
            <div className="sides right-side">
              <span className="appointment-horaire">08:00 am</span>
              <BsFillTrashFill className="trash-icon" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Appointment;
