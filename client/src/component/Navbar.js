import { Link } from "react-router-dom";
import { useState } from "react";
import logo_cmmuffler from "../img/svg/logo_cmmuffler.svg";
import "./Navbar.css";

const Navbar = () => {
  const [dropResponsive, setDropResponsive] = useState(false);

  const dropdownrespon = () => {
    setDropResponsive(!dropResponsive);
  };

  return (
    <div className="container-fluid navberMain">
      <div className="container">
        <div className="top-navbar">
          <div className="logo-navbar">
            <img src={logo_cmmuffler} alt="" />
          </div>
          <div className="menu-navbar">
            <ul>
              <li>
                <Link to="/">หน้าแรก</Link>
              </li>
              <li>
                <Link to="/">สินค้า</Link>
                <ul>
                  <li>
                    <Link to="/">ท่อสแตนเลส</Link>
                  </li>
                  <li>
                    <Link to="/">ท่อไทเทเนียม</Link>
                  </li>
                  <li>
                    <Link to="/">หม้อพัก</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">เกี่ยวกับเรา</Link>
              </li>
              <li>
                <Link to="/">ติดต่อ</Link>
              </li>
              <li>
                <Link to="/">LOGIN</Link>
              </li>
            </ul>
          </div>
          <div
            className="icon-respon"
            onClick={(e) => dropdownrespon(!dropResponsive)}
          >
            <span>icon</span>
          </div>
        </div>
        <div
          className={
            dropResponsive
              ? "menu-navbar-responsive show-respon"
              : "menu-navbar-responsive"
          }
        >
          <ul>
            <li>
              <Link to="/">หน้าแรก</Link>
            </li>
            <li>
              <Link to="/">สินค้า</Link>
              <ul>
                <li>
                  <Link to="/">ท่อสแตนเลส</Link>
                </li>
                <li>
                  <Link to="/">ท่อไทเทเนียม</Link>
                </li>
                <li>
                  <Link to="/">หม้อพัก</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">เกี่ยวกับเรา</Link>
            </li>
            <li>
              <Link to="/">ติดต่อ</Link>
            </li>
            <li>
              <Link to="/">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
