import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class BlogItem extends Component {

  static propTypes = {}
  render() {

    // class base component props we use inside of render function
      let {tittle, discription, imgUrl, url, publishedAt, publisher } = this.props;

      return (
      <div>
        <div className="card">
                {/* props */} 
        <img src={imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
        <span className="badge bg-dark">{publisher}</span>
                                    {/* props */}
            <h5 className="card-title">{tittle}</h5>
                                    {/* props */}
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className="text-muted">Last updated {new Date(publishedAt).toUTCString()}</small></p>
            <a href={url} target='_blank' className="btn btn-sm btn-primary" rel="noreferrer">read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default BlogItem