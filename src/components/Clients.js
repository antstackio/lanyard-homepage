import React from "react"

import blr from "../images/blr.jpg"
import mum from "../images/mum.jpg"
import chn from "../images/chn.jpg"

const Clients = () => (
  <div id="Clients">
    <h1 className="the_title">Clients</h1>
    <div className="container">
      <div className="in_wrap by_two">
        <div className="client_list">
          <div className="client_item">
            <img src={blr} />
            <p>AWS Users Group Bengaluru</p>
          </div>

          <div className="client_item">
            <img src={mum} />
            <p>AWS Users Group Mumbai</p>
          </div>

          <div className="client_item">
            <img src={chn} />
            <p>AWS Users Group Chennai</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Clients
