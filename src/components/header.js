import React, { Component } from "react"
import logo from "../images/icon.svg"

class Header extends Component {
  state = {
    fixedHeader: false,
  }

  header = React.createRef()

  componentDidMount() {
    this.handleScroll()
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (document.documentElement.scrollTop > 200) {
      this.setState({
        fixedHeader: true,
      })
    } else {
      this.setState({ fixedHeader: false })
    }
  }

  render() {
    return (
      <div id="header" className={this.state.fixedHeader ? "scrolled" : " "}>
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <ul className="nav_menu">
          <li>Features</li>
          <li>App</li>
          <li>Clients</li>
          <li>Connect</li>
        </ul>
      </div>
    )
  }
}

export default Header
