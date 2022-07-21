import PropTypes from 'prop-types'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Error from './components/Error'

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>

      </BrowserRouter>
    )
  }
}

export default App