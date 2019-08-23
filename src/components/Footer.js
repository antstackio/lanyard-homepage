import React from "react"

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaSlack,
} from "react-icons/fa"

import logo from "../images/logo.svg"

const Footer = () => (
  <div id="Footer">
    <div className="container">
      <div className="in_wrap by_two">
        <div className="logo_n_icons">
          <div className="logo_img">
            <img src={logo} alt="logo" />
          </div>
          <ul className="soci">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaSlack />
            </li>
          </ul>
        </div>
        <hr className="hr" />
        <p className="foot_note">
          Powered by Lanyard © 2019 all rights reserved.
        </p>
      </div>
    </div>
  </div>
)

export default Footer
