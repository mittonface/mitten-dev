import React from "react"
import style from "../styles/about.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const About = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4 offset-md-3">
        <h3 className="roboto">About me</h3>
        <p className="merriweather">
          I'm currently a senior developer on a team at Scholastic where we try
          to consolidate and make actionable data from multiple literacy
          learning products.
        </p>
        <p className="merriweather">
          I hold a MSc. Computer Science from Georgia Tech, 12-years of
          development experience, and an urge to learn as many fun technologies
          as possible.
        </p>

        <p className="merriweather">
          Also I have a very needy cat name Moffat and a very needy dog named
          Copper.
        </p>
      </div>
      <div className="col-md-2">
        <div class={style.contactContainer}>
          <h3 className="roboto">Contact</h3>

          <div>
            <a href="https://www.linkedin.com/in/brentmitton/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={style.contactItem}
              ></FontAwesomeIcon>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/mittonface">
              <FontAwesomeIcon
                icon={faTwitter}
                className={style.contactItem}
              ></FontAwesomeIcon>
            </a>
          </div>
          <div>
            <a href="https://github.com/mittonface">
              <FontAwesomeIcon
                icon={faGithub}
                className={style.contactItem}
              ></FontAwesomeIcon>
            </a>
          </div>
          <div>
            <a href="https://instagram.com/mittonface">
              <FontAwesomeIcon
                icon={faInstagram}
                className={style.contactItem}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
