import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class BlogItem extends Component {
  
  static propTypes = {}
  render() {
      let {tittle, discription, imgUrl} = this.props;
      return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{discription}</p>
            <a href="/" target='_blank' className="btn btn-sm btn-primary">read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default BlogItem