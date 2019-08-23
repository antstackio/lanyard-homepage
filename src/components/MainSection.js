import React from "react"
import logo from "../images/logo.svg"
import phone from "../images/iphone.svg"
import sec_1_ss from "../images/sec_1_ss.jpg"

const MainSection = () => (
  <div id="MainSection">
    <div className="container">
      <div className="in_wrap by_two">
        <div className="left">
          <img src={logo} alt="lanyard_logo" />
          <p>
            Lanyard was originally created by us for our community event AWS
            Community Day. It became popular in the community because of ease of
            use and well thought-out inteface. Quickly other communities wanted
            to use this app & we helped them get up and running. This made us
            think there may be many more organizers who woould love to use
            something like Lanyard & hence we decided to open-source the project
          </p>
          <br />
          <button>Get Lanyard</button>
        </div>
        <div className="right">
          <img src={phone} alt="phone_Demo" className="iphone" />
          <img src={sec_1_ss} alt="phone_Demo" />
        </div>
      </div>
    </div>
  </div>
)

export default MainSection
