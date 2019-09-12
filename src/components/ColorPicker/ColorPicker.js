import React, { useState } from "react"
import "./ColorPicker.scss"

const ColorPicker = props => {
  const [colorVal, setColorVal] = useState("#000000")

  function inputColor(val) {
    if (val.includes("#")) {
      props.onChange(val)
      setColorVal(val)
    } else {
      props.onChange("#" + val)
      setColorVal("#" + val)
    }
  }
  return (
    <div className={`form-row colorPicker ${props.className}`}>
      <label className="key">{props.label}</label>
      <div className="val">
        <input
          className="color_icon"
          type="color"
          value={colorVal}
          onChange={e => inputColor(e.target.value)}
        />
        <input
          type="text"
          value={colorVal}
          onChange={e => inputColor(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ColorPicker
