import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

export default () => (
  <div className={headerStyles.header}>
    <Link to="/">Home</Link>
    <Link to="/about">Sobre</Link>
  </div>
)
