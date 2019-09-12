import React from "react"
import _ from "lodash"

const newSlot = ({ fieldList, finJson }) => {
  console.log(finJson)
  return (
    <div className="newSlot">
      {fieldList.map(field => (
        <div className="form-row flexible" key={field}>
          <label className="key">{_.startCase(field)}</label>
          <div className="val">
            {field === "eventType" && (
              <select>
                <option value="talk">Talk</option>
                <option value="break">Break</option>
                <option value="other">other</option>
              </select>
            )}
            {field === "slotId" && (
              <input
                type="text"
                value={finJson.slots.length ? finJson.slots.length + 1 : 1}
                disabled
              />
            )}
            {field === "timeStart" && <input type="date" />}
            {field === "timeEnd" && <input type="date" />}
            {field === "tracks" && <input type="number" />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default newSlot
