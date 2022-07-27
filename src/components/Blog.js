import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BlogItem from './BlogItem'
import Spinner from './Spinner'
export class Blog extends Component {

  constructor(props){
    super(props);
    this.state= {
      articles: [],
      loading: false,
      page: 1
    }
  }



  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0c09c001c5fd42ab956c7ed6738eabd7&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }


  handlePrevious = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0c09c001c5fd42ab956c7ed6738eabd7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
  })
}


  handleNext = async()=>{
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0c09c001c5fd42ab956c7ed6738eabd7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
  }
  }


  static propTypes = {}

  render() {
    return (
      <div className='container'>
        <h1 className='text-2xl text-center mt-3 font-semibold'>top headlines</h1>
       {this.state.loading && <Spinner/>}
        <div className="row mt-4">
        {!this.state.loading && this.state.articles.map((element) => {
          return <div className="col-md-4 my-3" key={element.url}>
                  <BlogItem tittle={element.title?element.title:"fuck me"} discription= {element.description} imgUrl= {element.urlToImage?element.urlToImage:"http://beta.ems.ladbiblegroup.com/s3/content/808x455/0bb079b75d654f14eec508e0ffc957eb.png"} url= {element.url} publishedAt= {element.publishedAt} publisher = {element.source.name} />
                </div>
        })}

        </div>


        <div className="container d-flex justify-between my-2">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark bg-slate-600" onClick={this.handlePrevious}>previous</button>

        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark bg-slate-600" onClick={this.handleNext}>next</button>

        </div>
      </div>

    )
  }
}

export default Blog