import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "../App.css"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout