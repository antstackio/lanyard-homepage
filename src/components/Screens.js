import React from "react"

import ss1 from "../images/ss1.jpg"
import ss2 from "../images/ss2.jpg"
import ss3 from "../images/ss3.jpg"
import ss4 from "../images/ss4.jpg"
import ss5 from "../images/ss5.jpg"

const Screens = () => (
  <div id="Screens">
    <div className="container">
      <div className="in_wrap by_two">
        <div className="show">
          <div className="screen">
            <img src={ss1} alt="ss1" />
          </div>
          <div className="screen">
            <img src={ss2} alt="ss2" />
          </div>
          <div className="screen main">
            <img src={ss3} alt="ss3" />
          </div>
          <div className="screen">
            <img src={ss4} alt="ss4" />
          </div>
          <div className="screen">
            <img src={ss5} alt="ss5" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Screens
