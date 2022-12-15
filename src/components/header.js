import { BiSearchAlt2, BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import "../assets/css/header.css";
import profile_img from "../assets/images/ennaime.jpeg";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="App-header">
      <div className="header">
        <ul className="nav-list">
          <div className="left-header">
            <h2>MEDICAL</h2>
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
            <div className="profile">
              <img src={profile_img} alt="user-profile" className="user-img" />
              <h5>Ahmed Ennaime</h5>
              <BiDownArrow className="drop-down-btn" />
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
