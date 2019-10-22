import React, { Fragment, useState } from "react"
import _ from "lodash"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const NewSlot = ({ baseJson, finJson }) => {
  const slotField = ["eventType", "slotId", "timeStart", "timeEnd"]
  const speakerFields = [
    "firstName",
    "lastName",
    "profilePicture",
    "designation",
    "externalLink",
  ]

  const trackFileds = ["trackId", "title", "speakers"]

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [selectedTrack, setSelectedTrack] = useState(0)

  function getTrackID(addition) {
    let idCount = 0
    finJson.slots.map(slot => {
      idCount = idCount + slot.tracks.length
    })
    return "Track_" + (idCount + addition)
  }

  return (
    <div id="NewSlot">
      <div className="form-group slots">
        {slotField.map(field => (
          <div className="form-row flexible" key={field}>
            <label className="key">{_.startCase(field)}</label>
            <div className="val">
              {field === "eventType" && (
                <select>
                  <option value="talk">Talk</option>
                  <option value="break">Break</option>
                  <option value="other">Other</option>
                </select>
              )}
              {field === "slotId" && (
                <input
                  type="text"
                  value={finJson.slots.length ? finJson.slots.length + 1 : 1}
                  disabled
                />
              )}
              {field === "timeStart" && (
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={5}
                  timeCaption="Start Time"
                  dateFormat="h:mm aa"
                />
              )}
              {field === "timeEnd" && (
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={5}
                  timeCaption="Start Time"
                  dateFormat="h:mm aa"
                />
              )}
            </div>
          </div>
        ))}
        <div className="tracks">
          <h2>Tracks</h2>
          <button>Add Tracks</button>
        </div>
      </div>
    </div>
  )
}

export default NewSlot
