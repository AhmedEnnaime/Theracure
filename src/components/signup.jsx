import "../assets/css/login.css";
import { BiLock } from "react-icons/bi";
import logo from "../assets/images/thecure.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const url = "http://localhost/YouCode/Theracure";
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post(`${url}/users/signup`, inputs)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-head">
          <img width="250px" src={logo} alt="" />
          <BiLock className="lock-icon" />
        </div>
        <div className="login-inputs">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="login-inp"
              type="text"
              name="name"
              placeholder="Enter full name"
              onChange={handleChange}
              required
            />
            <input
              className="login-inp"
              type="date"
              name="birthday"
              placeholder="Enter birthday"
              onChange={handleChange}
              required
            />
            <input
              className="login-inp"
              type="text"
              name="cin"
              placeholder="Enter cin"
              onChange={handleChange}
              required
            />
            <input
              className="login-inp"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
            <input
              className="login-inp"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
            <input
              className="login-inp"
              type="file"
              name="img"
              placeholder="Enter img"
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn">
              Signup
            </button>
          </form>
          <Link to={"/login"}>
            <p className="signup-link">Already have account ? Login now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
