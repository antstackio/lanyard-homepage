import React from "react"

import { FaTwitter, FaGithub } from "react-icons/fa"

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
              <a href="ma//twitter.com/antstackio">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="//github.com/antstackio/lanyard">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <hr className="hr" />
        <p className="foot_note">
          &copy; Powered by{" "}
          <a
            href="http://antstack.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            antstack.io 2019-{(new Date().getFullYear())}
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
)

export default Footer
