import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BlogItem from './BlogItem'
import Spinner from './Spinner'
export class Blog extends Component {

    static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    }

    static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    }


  constructor(props){
    super(props);
    this.state= {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json() 
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })

  }

  async componentDidMount(){
  this.updateNews();
  }


  handlePrevious = async()=>{
  this.setState({ page: this.state.page - 1 });
  this.updateNews()
  }


  handleNext = async()=>{
  this.setState({ page: this.state.page + 1 });
        this.updateNews()
  }


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
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark bg-slate-600" onClick={this.handlePrevious}> previous </button>

        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark bg-slate-600" onClick={this.handleNext}>next</button>

        </div>
      </div>

    )
  }
}

export default Blog