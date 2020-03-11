import style from "../../styles/navbar.module.css"
import React from "react"
import { Link } from "gatsby"

class NavLink extends React.Component {
  render() {
    return (
      <li className="nav-item active">
        <Link className="nav-link" to={this.props.linkref}>
          <span className={style.nav}>{this.props.linktext}</span>
        </Link>
      </li>
    )
  }
}

export default NavLink
