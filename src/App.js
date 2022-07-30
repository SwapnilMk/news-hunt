import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import About from './components/About'
import Error from './components/Error'

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route exact path="/" element={<Blog key="home" pageSize={12}  category="general" country="in" />} />
          <Route exact path="/business" element={<Blog key="business" pageSize={6} category="business" country="in"/>} />
          <Route exact path="/health" element={<Blog key="health" pageSize={6} category="health" country="in"/>} />
          <Route exact path="/science" element={<Blog key="science" pageSize={6} category="science" country="in"/>} />      
          <Route exact path="/sports" element={<Blog key="sports" pageSize={6} category="sports" country="in"/>} />
          <Route exact path="/technology" element={<Blog key="technology" pageSize={6} category="technology" country="in"/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App