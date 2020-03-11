/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import homeStyle from "../styles/home.module.css"
import { Link } from "gatsby"
import pixelArt from "../../content/assets/logo.png"

const Home = ({ children }) => {
  return (
    <>
      <div className={homeStyle.container}>
        <div>
          <img src={pixelArt} />
        </div>
        <div className={homeStyle.sitename}>mitten.dev</div>
        <div className={homeStyle.nav}>
          <Link to="/about" className={homeStyle.nav}>
            About
          </Link>
          |
          <Link to="/blog" className={homeStyle.nav}>
            Blog
          </Link>
          |
          <Link to="/" className={homeStyle.nav}>
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
