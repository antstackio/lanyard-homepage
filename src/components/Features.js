import React from "react"

const Features = () => (
  <div id="Features">
    <div className="container">
      <h1 className="the_title">Features</h1>
      <div className="fet_list">
        <div className="fet_item">
          <div className="im_ttl">
            <h4>Time Aware</h4>
            <div className="dif_im"></div>
          </div>
          <div className="desc">
            <p>
              When you open the app, it always displays what's currently
              happening based on time, right in your face, no scrolling through
              endless agenda table
            </p>
          </div>
        </div>
        <div className="fet_item">
          <div className="im_ttl">
            <h4>Make Your Own Schedule</h4>
            <div className="dif_im"></div>
          </div>
          <div className="desc">
            <p>
              Let's users to make their own schedule for mult-track events and
              accordingly highlights the scheduled track at that time.
            </p>
          </div>
        </div>
        <div className="fet_item">
          <div className="im_ttl">
            <h4>Talk Level Feedback</h4>
            <div className="dif_im"></div>
          </div>
          <div className="desc">
            <p>
              We all know that feedback at the end of the event is broken and
              very less useful. Lanyard allows attendees give feedback for the
              talk right after it is finished, collecting the feedback when the
              talk is still fresh in the head.
            </p>
          </div>
        </div>
        <div className="fet_item">
          <div className="im_ttl">
            <h4>Progressive Web App (PWA)</h4>
            <div className="dif_im"></div>
          </div>
          <div className="desc">
            <p>
              No App Stores, No installation, just load the URL and tap "Add to
              Home Screen", use it for the event & remove it later.
            </p>
          </div>
        </div>
        <div className="fet_item">
          <div className="im_ttl">
            <h4>Works offline!</h4>
            <div className="dif_im"></div>
          </div>
          <div className="desc">
            <p>
              Having a decent network connectivity at the event is always a
              challenge. Lanyard takes advantage of local storage & once it's
              loaded, it can completely work offline (except for submitting
              feedback).
            </p>
          </div>
        </div>
        <div className="fet_item">
          <div className="im_ttl">
            <h4>Kiosk Mode</h4>
            <div className="dif_im"></div>
          </div>
          <div className="desc">
            <p>
              As an organiser if you want to display agenda on a vertically
              mounted display, you could use Kiosk mode of Lanyard. Just like
              the normal version, it is time-aware and will always display
              currently running talk, it's plug & play! Kiosk mode also sports a
              QR code for people to scan and get this on their phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Features
