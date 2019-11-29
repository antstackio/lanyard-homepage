import React from "react"

import blr from "../images/blr.jpg"
import mum from "../images/mum.jpg"
import chn from "../images/chn.jpg"
import aav from "../images/aav.jpg"

const Clients = () => (
  <div id="Clients">
    <h1 className="the_title">Events</h1>
    <div className="container">
      <div className="in_wrap by_two">
        <div className="client_list">
          <div className="client_item">
            <img src={blr} alt="Community Day AWS User Group Bangalore" />
            <p>AWS Users Group Bengaluru</p>
          </div>

          <div className="client_item">
            <img src={mum} alt="Community Day AWS User Group Mumbai" />
            <p>AWS Users Group Mumbai</p>
          </div>
          <div className="client_item">
            <img src={aav} alt="Amazon Alexa VOXCON " />
            <p>Amazon Alexa VOXCON </p>
          </div>

          <div className="client_item">
            <img src={chn} alt="Community Day AWS User Group Chennai" />
            <p>AWS Users Group Chennai</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Clients
