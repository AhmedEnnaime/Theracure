import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import AllDoctors from "./components/allDoctors";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/doctors" element={<AllDoctors />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
