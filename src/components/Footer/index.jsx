import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import * as Styled from "./styled"

const Footer = () => {
  // Desestructuring
  const {
    site: {
      siteMetadata: {
        copyright,
        description,
        socialMedia: { codepen, facebook, github },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          description
          socialMedia {
            codepen
            facebook
            github
          }
        }
      }
    }
  `)

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-md-6 mb-3">{description}</div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <Link to={github} target="_blank" rel="noopener noreferrer">
              <Styled.GithubIcon />
            </Link>
            <Link to={codepen} target="_blank" rel="noopener noreferrer">
              <Styled.CodepenIcon />
            </Link>
            <Link to={facebook} target="_blank" rel="noopener noreferrer">
              <Styled.FacebookIcon />
            </Link>
          </div>
          
        </div>
          
      </div>
      <div className="container-fluid">
        <div className="row bg-gray-dark text-white py-3">
          <div className="col-12 d-flex justify-content-center">
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
