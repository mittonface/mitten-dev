import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Navbar from "./navbar/navbar"
import Jumbotron from "./jumbotron"

const Layout = ({ location, title, postTitle, postDescription, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  header = (
    <h3
      style={{
        fontFamily: `Roboto Mono`,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )

  return (
    <>
      <Navbar />
      <Jumbotron
        title={postTitle || "blog"}
        subtitle={postDescription || "I should really write things down."}
      />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
        <footer style={{ position: `fixed`, bottom: 5 }}>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
