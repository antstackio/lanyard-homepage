import React, { useState, useEffect } from "react"

export const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(
    props.activeIndex ? props.activeIndex : 0
  )

  const selectTabIndex = activeIndex => {
    setActiveIndex(activeIndex)
  }
  // console.log(activeIndex + " tab")
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      activeIndex: activeIndex,
      onSelectTab: selectTabIndex,
    })
  })
  return (
    <div className={`tabs ${props.className ? props.className : " "}`}>
      {children}
    </div>
  )
}
export const TabList = props => {
  // console.log(props.activeIndex + " tabList")
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === props.activeIndex,
      onSelect: () => props.onSelectTab(index),
    })
  })
  return <ul className="tabList">{children}</ul>
}
export const Tab = props => {
  const isDisabled = false
  // console.log(props.isActive + " tab")
  return (
    <li
      onClick={isDisabled ? null : props.onSelect}
      className={
        isDisabled ? "tab disabled" : props.isActive ? "tab active" : "tab"
      }
    >
      <span>{props.children}</span>
    </li>
  )
}
export const TabPanels = props => {
  return <ul className="tabPanels">{props.children[props.activeIndex]}</ul>
}
export const TabPanel = props => {
  return <li className="tabPanel">{props.children}</li>
}
