import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsLine } from "react-icons/bs";
import logo_cmmuffler from "../img/svg/logo_cmmuffler.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="footer-logo-company">
          <img src={logo_cmmuffler} alt="" />
          <p>Lorem Ipsum has been the industry's</p>
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <Link to="/">หน้าแรก</Link>
            </li>
            <li>
              <Link to="/">สินค้า</Link>
            </li>
            <li>
              <Link to="/">เกี่ยวกับเรา</Link>
            </li>
            <li>
              <Link to="/">ติดต่อ</Link>
            </li>
          </ul>
        </div>
        <div className="footer-icon">
          <BsFacebook />
          <BsLine />
        </div>
      </div>
      <div className="footer-c">
        <span>© Chiang Mai Muffer</span>
      </div>
    </div>
  );
};

export default Footer;
