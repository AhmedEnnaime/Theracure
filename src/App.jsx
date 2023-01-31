import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "./components/signup";
import AllDoctors from "./components/allDoctors";
import Profile from "./components/profile";
import axios from "axios";
import getUserId from "./components/getUserId";

const App = () => {
  const [user, setUser] = useState({});
  const url = "http://localhost/YouCode/Theracure";
  const userId = getUserId();

  useEffect(() => {
    if (userId) {
      getUserLoggedIn();
    }
  }, []);

  const getUserLoggedIn = async () => {
    await axios
      .get(`${url}/users/getLoggedInUser/${userId}`)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/doctors" element={<AllDoctors user={user} />}></Route>
          <Route path="/profile" element={<Profile user={user} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
