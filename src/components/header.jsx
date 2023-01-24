import { BiSearchAlt2, BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import "../assets/css/header.css";
import profile_img from "../assets/images/ennaime.jpeg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/thecure-whitev2.svg";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const url = "http://localhost/YouCode/Theracure";
  const navigate = useNavigate();
  const logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.clear();
    navigate("/login");
    // await axios
    //   .post(`${url}/authenticate/logout`)
    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.data.message === "logged out successfully") {
    //       navigate("/login");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <header className="App-header">
      <div className="header">
        <ul className="nav-list">
          <div className="left-header">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <img src={logo} className="left-header-title" alt="" />
            </Link>
          </div>
          <div className="right-header">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className="search-input"
                placeholder="Enter Keyword"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={(e) => setSearch("")}
                type="submit"
                className="search-btn"
              >
                <BiSearchAlt2 className="search-icon" />
              </button>
            </form>
            <div
              className="dropdown"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <>
                <div className="profile">
                  <img
                    src={profile_img}
                    alt="user-profile"
                    className="user-img"
                  />
                  <h5>Ahmed Ennaime</h5>
                  <BiDownArrow className="drop-down-btn" />
                </div>
                {toggle && (
                  <div className="dropdown-content">
                    <Link style={{ textDecoration: "none" }} to={"/profile"}>
                      <p className="dropdown-link">Profile</p>
                    </Link>
                    <Link onClick={logout} style={{ textDecoration: "none" }}>
                      <p className="dropdown-link">Log out</p>
                    </Link>
                  </div>
                )}
              </>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
