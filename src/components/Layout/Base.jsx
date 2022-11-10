import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Base = (props) => {
  return (
    <>
    <div
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <main role="main">
        {props.children}
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Base
