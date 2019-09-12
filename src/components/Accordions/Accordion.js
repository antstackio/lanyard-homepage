import React, { useState } from "react"
import "./Panel.scss"
import {
  IoIosAdd,
  IoIosRemove,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io"

//Component to show CollapsablePanel which acts like a container
// and takes defaultOpened (boolean) as a prop:
export const CollapsablePanel = props => {
  const [panelOpen, setPanelOpen] = useState(props.defaultOpened)
  return (
    <div className="expand-panel CollapsablePanel">
      <label className="panel-header " data-open={panelOpen}>
        {props.defaultOpened ? (
          <input
            onChange={() => setPanelOpen(!panelOpen)}
            type="checkbox"
            name={props.name}
            defaultChecked
            id={props.id}
          />
        ) : (
          <input
            onChange={() => setPanelOpen(!panelOpen)}
            type="checkbox"
            name={props.name}
            id={props.id}
          />
        )}

        <div className="panel">{props.children[0]}</div>
        {panelOpen ? (
          <IoIosArrowUp className="sybicon" />
        ) : (
          <IoIosArrowDown className="sybicon" />
        )}
      </label>
      <div className="panel-body">{props.children[1]}</div>
    </div>
  )
}

//Header Component of CollapsablePanel which can take Panel as child:
export const CollapsablePanelHeader = ({ children }) => children

//Body Component of CollapsablePanel which can take Panel as child:
export const CollapsablePanelBody = ({ children }) => children

//Component to show Panels:
export const Panel = ({ children }) => {
  return (
    <div className="expand-panel">
      <div className="panel">
        {children.length
          ? children.flat().map(child => {
              return child
            })
          : children}
      </div>
    </div>
  )
}

//Sub Component of Panel which takes position(left/right) as prop:
export const SubPanel = ({ children, position }) => (
  <span className={position}>{children}</span>
)
