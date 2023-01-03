import Home from "./components/home";
import Footer from "./components/footer";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
