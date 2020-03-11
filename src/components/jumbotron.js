import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "../styles/jumbotron.module.css"
import myface from "../../content/assets/myface.png"

const Jumbotron = ({ title, subtitle }) => (
  <div className={`jumbotron jumbotron-fluid border ${style.reducePadding}`}>
    <div className={`container ${style.centerContainer}`}>
      <img src={myface} className={`img-thumbnail ${style.myface}`} />
      <h1 className={`display-6 mono`}>{title}</h1>
      <p className="lead roboto">{subtitle}</p>
    </div>
  </div>
)

export default Jumbotron
