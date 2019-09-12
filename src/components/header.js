import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../images/icon.svg"
import full_logo from "../images/logo.svg"

class Header extends Component {
  state = {
    fixedHeader: false,
    menuShow: false,
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
      <div
        id="header"
        onClick={() => this.setState({ menuShow: !this.state.menuShow })}
        className={`${this.state.menuShow ? "opened" : "closed"} ${
          this.state.fixedHeader ? "scrolled" : " "
        }`}
      >
        <div className="burgMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="full_logo">
          <Link to="/">
            <img src={full_logo} alt="full_logo"></img>
          </Link>
        </div>
        <div className="logo">
          <img
            onClick={() => {
              this.props.clickScroll("refMainSection")
            }}
            src={logo}
            alt="logo"
          ></img>
        </div>
        <ul className="nav_menu">
          <li
            onClick={() => {
              this.props.clickScroll("refFeatures")
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              this.props.clickScroll("refScreens")
            }}
          >
            App
          </li>
          <li
            onClick={() => {
              this.props.clickScroll("refClients")
            }}
          >
            Clients
          </li>
          <li
            onClick={() => {
              this.props.clickScroll("refFooter")
            }}
          >
            {" "}
            Connect
          </li>
          {/* <li>
            <Link to="/Scheduler">Scheduler</Link>
          </li> */}
        </ul>
      </div>
    )
  }
}

export default Header
