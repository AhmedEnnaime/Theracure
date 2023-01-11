import Footer from "./footer";
import Header from "./header";
import doctor_img from "../assets/images/ait elkadi.jpeg";
import { AiOutlineCamera } from "react-icons/ai";
import { useState } from "react";
import "../assets/css/profile.css";

const Profile = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const updateProfile = async () => {};
  return (
    <div>
      <Header />
      <h1 className="title">Profile</h1>
      <div className="profile-container">
        <div className="profile-head">
          <img className="profile-img" src={doctor_img} alt="" />
          <div className="image-upload">
            <label htmlFor="file-input">
              <AiOutlineCamera className="cam" />
            </label>
            <input id="file-input" type="file" />
          </div>
        </div>
        <div className="profile-body">
          <form action="" onSubmit={updateProfile}>
            <input
              type="text"
              name="name"
              className="login-inp"
              placeholder="Enter name"
              onChange={handleChange}
            />
            <input type="date" name="birthday" className="login-inp" />
            <input
              type="text"
              name="cin"
              className="login-inp"
              placeholder="Enter cin"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="login-inp"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="login-inp"
              placeholder="Enter password"
              onChange={handleChange}
            />
            <button type="submit" className="login-btn">
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
