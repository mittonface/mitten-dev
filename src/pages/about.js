import React from "react"
import Navbar from "../components/navbar/navbar"
import Jumbotron from "../components/jumbotron"
import About from "../components/about"

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Jumbotron
          title="brent mitton"
          subtitle="Senior Software Developer"
        ></Jumbotron>
        <About />
      </>
    )
  }
}

export default AboutPage
