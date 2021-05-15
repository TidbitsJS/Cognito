import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);
  const [elevateNav, setElevateNav] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setElevateNav(true);
    } else {
      setElevateNav(false);
    }
  };

  const toggleNavbar = () => {
    setShowToggle(!showToggle);
  };

  return (
    <header className={!elevateNav ? "header" : "header elevate"}>
      <NavLink to="/">
        <a href="/" className="header__logo">
          Cognito
        </a>
      </NavLink>

      <i
        className={
          !showToggle
            ? "bx bx-menu header__toggle"
            : "bx bx-menu header__toggle bx-x"
        }
        id="header-toggle"
        onClick={toggleNavbar}
      ></i>

      <nav className={showToggle ? `nav show` : `nav`} id="nav-menu">
        <div className="nav__content bd-grid">
          <NavLink to="/">
            <a href="/" className="nav__perfil">
              {/* <div className="nav__img">
              <img src="https://source.unsplash.com/200x200/?nature" alt="" />
            </div>

            <div>
              <span className="nav__name">Clay</span>
              <span className="nav__name">Mitchell</span>
            </div> */}

              <div className="nav__perfil-nav__logo">Cognito</div>
            </a>
          </NavLink>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item dropdown">
                <a href="#products" className="nav__link dropdown__link">
                  Products <i className="bx bx-chevron-down dropdown__icon"></i>
                </a>

                <ul className="dropdown__menu">
                  <li className="dropdown__item">
                    <a href="#identity" className="nav__link">
                      Identity
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#kyc" className="nav__link">
                      KYC
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#otp" className="nav__link">
                      OTP
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#identification" className="nav__link">
                      Identification
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav__item dropdown">
                <a href="/pricing" className="nav__link">
                  <NavLink to="/pricing" className="nav__link-router__link">
                    Pricing
                  </NavLink>
                </a>
              </li>

              <li className="nav__item">
                <a href="#developers" className="nav__link">
                  Developers
                </a>
              </li>

              <li className="nav__item dropdown">
                <a href="#company" className="nav__link dropdown__link">
                  Company <i className="bx bx-chevron-down dropdown__icon"></i>
                </a>

                <ul className="dropdown__menu">
                  <li className="dropdown__item">
                    <a href="#about" className="nav__link">
                      About
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#contact" className="nav__link">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#sign-up" className="nav__link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
