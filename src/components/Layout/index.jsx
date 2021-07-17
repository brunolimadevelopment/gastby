import * as React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"
import GlobalStyle from '../../styles/globalStyled'
import Footer from '../Footer'


import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      Header
      <GlobalStyle />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
