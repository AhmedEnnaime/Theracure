import { BiSearchAlt2, BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import "../assets/css/header.css";
import profile_img from "../assets/images/ennaime.jpeg";
import { Link } from "react-router-dom";
import logo from "../assets/images/thecure-whitev2.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

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
                    <Link style={{ textDecoration: "none" }}>
                      <p className="dropdown-link">Profile</p>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                      <p className="dropdown-link">Settings</p>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={"/login"}>
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
