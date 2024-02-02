import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BlogItem from './BlogItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class Blog extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <h1 className="text-2xl text-center mt-3 font-semibold">
            Top Headlines
          </h1>
          <div className="row mt-4">
            {this.state.articles.map((element) => (
              <div className="col-md-4 my-3" key={element.url}>
                <BlogItem
                  title={element.title ? element.title : "News"}
                  description={element.description}
                  imgUrl={element.urlToImage ? element.urlToImage : "http://beta.ems.ladbiblegroup.com/s3/content/808x455/0bb079b75d654f14eec508e0ffc957eb.png"}
                  url={element.url}
                  publishedAt={element.publishedAt}
                  publisher={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    );
  }
}

export default Blog;
