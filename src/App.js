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
          <Route exact path="/" element={<Home key="home" pageSize={6}  category="general" />} />
          <Route exact path="/blog" element={<Blog key="blog" pageSize={10} category="general"/>} />
          <Route exact path="/business" element={<Blog key="business" pageSize={6} category="business"/>} />
          <Route exact path="/entertainment" element={<Blog key="general" pageSize={6} category="entertainment"/>} />
          <Route exact path="/general" element={<Blog key="general" pageSize={6} category="general"/>} />
          <Route exact path="/health" element={<Blog key="health" pageSize={6} category="health"/>} />
          <Route exact path="/science" element={<Blog key="science" pageSize={6} category="science"/>} />      
          <Route exact path="/sports" element={<Blog key="sports" pageSize={6} category="sports"/>} />
          <Route exact path="/technology" element={<Blog key="technology" pageSize={6} category="technology"/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App