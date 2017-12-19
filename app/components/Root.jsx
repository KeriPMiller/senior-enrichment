import React, { Component } from 'react'
import NavBar from './NavBar'

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    < NavBar />
    {children}
  </div>
)
export default Root
