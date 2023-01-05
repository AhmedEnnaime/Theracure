import "../assets/css/footer.css";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import logo from "../assets/images/logo_thercaure1.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-head">
          <img width="300px" src={logo} alt="" />
        </div>
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Contact</h3>
            <div className="section_content">
              <p>+212682622717</p>
              <p>ahmedennaime20@gmail.com</p>
              <p>Ahmed Ennaime</p>
              <div className="social">
                <BsFacebook className="social_link" />
                <BsInstagram className="social_link" />
                <BsTwitter className="social_link" />
              </div>
            </div>
          </div>

          <div className="footer-info">
            <h3 className="footer-title">Services</h3>
            <div className="section_content">
              <p>Medical treatment</p>
              <p>Good care</p>
              <p>Online appointments</p>
            </div>
          </div>

          <div className="footer-info">
            <h3 className="footer-title">Office</h3>
            <div className="section_content">
              <p>Address :21 rue el falah</p>
              <p>City: Safi</p>
              <p>Country: Morocco</p>
            </div>
          </div>

          <div className="footer-info">
            <h3 className="footer-title">Subscribe</h3>
            <div className="section_content">
              <input
                className="subscribe_input"
                placeholder="Enter email"
                type="email"
              />
              <button className="subscribe_btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
