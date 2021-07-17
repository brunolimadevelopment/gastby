import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        <Img fixed={logo.childImageSharp.fixed} alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      < span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              activeClassName="active"
              className="nav-link"
              activeStyle={{ color: "#9963BA" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              activeClassName="active"
              className="nav-link"
              activeStyle={{ color: "#9963BA" }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              activeClassName="active"
              className="nav-link"
              activeStyle={{ color: "#9963BA" }}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              activeClassName="active"
              className="nav-link"
              activeStyle={{ color: "#9963BA" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
