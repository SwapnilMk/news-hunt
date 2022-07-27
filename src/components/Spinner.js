import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
        <div className="text-center my-10">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}

export default Spinner