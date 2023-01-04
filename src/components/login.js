import { BiLock } from "react-icons/bi";
import "../assets/css/login.css";
import logo from "../assets/images/logo_thercaure1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-head">
          <img width="250px" src={logo} alt="" />
          <BiLock className="lock-icon" />
        </div>
        <div className="login-inputs">
          <form action="">
            <input
              className="login-inp"
              type="email"
              placeholder="Enter email"
            />
            <input
              className="login-inp"
              type="password"
              placeholder="Enter password"
            />
            <button className="login-btn">Login</button>
          </form>
          <Link to={"/signup"}>
            <p className="signup-link">Don't have account ? sign up now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
