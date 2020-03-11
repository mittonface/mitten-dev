/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import style from "../../styles/navbar.module.css"
import pixelArt from "../../../content/assets/justme.png"
import NavLink from "./navlink"

const Navbar = () => {
  return (
    <header>
      <nav
        className={`navbar navbar-light bg-light navbar-expand-lg ${style.navbarwhite}`}
      >
        <Link to="/" className="navbar-brand">
          <img
            src={pixelArt}
            className="d-inline-block align-top"
            height="30px"
            style={{ marginBottom: 0 }}
            alt=""
          />
          <span className={style.navSiteName}>mitten.dev</span>
        </Link>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <NavLink linkref="/about" linktext="About" />
            <NavLink linkref="/blog" linktext="Blog" />
            <NavLink linkref="/contact" linktext="Contact" />
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
