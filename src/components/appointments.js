const Appointment = () => {
  return (
    <div className="card appointment-card">
      <div className="card-head">
        <h3 className="card-title">Appointments</h3>
        <span>12 appointments</span>
      </div>

      <div className="card-body">
        <ul className="appointment-list">
          <li className="card-item">
            <span className="appointment-date">21 / 06 / 2022</span>
            <span className="appointment-horaire">08:00 AM</span>
            <h5 className="doctor-name">Dr.Mahjour</h5>
          </li>

          <li className="card-item">
            <span className="appointment-date">21 / 06 / 2022</span>
            <span className="appointment-horaire">08:00 AM</span>
            <h5 className="doctor-name">Dr.Mahjour</h5>
          </li>

          <li className="card-item">
            <span className="appointment-date">21 / 06 / 2022</span>
            <span className="appointment-horaire">08:00 AM</span>
            <h5 className="doctor-name">Dr.Mahjour</h5>
          </li>

          <li className="card-item">
            <span className="appointment-date">21 / 06 / 2022</span>
            <span className="appointment-horaire">08:00 AM</span>
            <h5 className="doctor-name">Dr.Mahjour</h5>
          </li>

          <li className="card-item active">
            <span className="appointment-date">31 / 06 / 2022</span>
            <span className="appointment-horaire">08:00 AM</span>
            <h5 className="doctor-name">Dr.Mahjour</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Appointment;
