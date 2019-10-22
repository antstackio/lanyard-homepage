import React, { useState, Fragment } from "react"
import ColorPicker from "../ColorPicker/ColorPicker"
import Graphic from "../../ImgComponents/Graphic"
import doc from "../../images/doc.svg"

const BaseConfig = props => {
  const [evName, setEvName] = useState(null)
  const [evSpan, setEvSpan] = useState(0)
  const [evDate, setEvDate] = useState(null)
  const [evTracks, setEvTracks] = useState(0)
  const [evSolidColor, setEvSolidColor] = useState(null)
  const [evDarkColor, setEvDarkColor] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const [file_name, setFile_name] = useState(null)
  const [from_page, setFrom_page] = useState(null)
  const [file_data, setFile_data] = useState(null)
  const [file_type, setFile_type] = useState(null)

  function handleClick() {
    const temObj = {
      eventName: evName,
      eventSpan: evSpan,
      eventDate: new Date(evDate).getTime(),
      eventTracks: evTracks,
      eventSolidColor: evSolidColor,
      eventDarkColor: evDarkColor,
      eventLogo: imageUrl,
    }
    console.log(temObj)
  }

  function openFile(event) {
    const actFileName = event.target.value.replace(/^.*[\\\/]/, "")
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setImageUrl(reader.result)
      setFile_name(actFileName)
    }

    if (file) {
      reader.readAsDataURL(file)
      setFrom_page("Renew Insurance Upload")
      setFile_data(event.target.files[0])
      setImageUrl(reader.result)
      setFile_name(actFileName)
      setFile_type(file.type)
    }
  }

  return (
    <div className="BaseConfig">
      <div className="configPlayGround">
        <div className="form-group inputs">
          <div className="form-row evName">
            <label className="key">Event Name</label>
            <div className="val">
              <input
                type="text"
                defaultValue={evName}
                onChange={e => setEvName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row  evSpan">
            <label className="key">Event Span</label>
            <div className="val">
              <input
                type="number"
                defaultValue={evSpan}
                onChange={e => setEvSpan(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row  evDate">
            <label className="key">Event Date</label>
            <div className="val">
              <input type="date" onChange={e => setEvDate(e.target.value)} />
            </div>
          </div>

          <div className="form-row  evTracks">
            <label className="key">Total Tracks</label>
            <div className="val">
              <input
                type="number"
                defaultValue={evTracks}
                onChange={e => setEvTracks(e.target.value)}
              />
            </div>
          </div>
          <ColorPicker
            className="evSolidColor"
            label="Solid Color"
            onChange={val => setEvSolidColor(val)}
          />
          <ColorPicker
            className="evDarkColor"
            label="Dark Color"
            onChange={val => setEvDarkColor(val)}
          />
        </div>
        <div className="form-group file">
          <div className="form-row file_upload_wrapper evLogo">
            <label className="key">Total Tracks</label>
            <div className="val">
              <label htmlFor="file" className="file_upload">
                {!file_name ? (
                  <span className="text_label">Upload Logo</span>
                ) : null}
                <input
                  type="file"
                  id="file"
                  accept=".pdf, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/*"
                  onChange={event => openFile(event)}
                />
                {file_name && !imageUrl ? <span>Loading...</span> : null}
                {file_name ? (
                  <Fragment>
                    <div className="image-wrapper">
                      <img
                        alt="Uploaded File"
                        src={!file_type.includes("image") ? doc : imageUrl}
                      />
                    </div>

                    <p className="f-name button small plain ">{file_name}</p>
                  </Fragment>
                ) : null}
              </label>
            </div>
          </div>
        </div>
        <div className="graphic">
          <Graphic
            evName={evName}
            evLogo={imageUrl}
            evSolidColor={evSolidColor}
            evDarkColor={evDarkColor}
          />
        </div>
      </div>
      <button
        onClick={() => {
          handleClick()
          props.onClick(1)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default BaseConfig
