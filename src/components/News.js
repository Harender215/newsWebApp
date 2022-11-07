import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
export class News extends Component {

  static defaultProps = {
    country: 'in',
    pazeSize: 8,
    category: PropTypes.string,
  }

  static propTypes = {
    country: PropTypes.string,
    pazeSize: PropTypes.number,
  }
  constructor() {
    super();
    console.log("Hello I am a constructor from News components");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4c515196f564e2094c5a09e0aa76b49&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async() => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4c515196f564e2094c5a09e0aa76b49&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })
  }


  handleNextClick = async() => {
    console.log("Next");
    if(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4c515196f564e2094c5a09e0aa76b49&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
      
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center ">Latest News - Top Headlines  page:{this.state.page}</h2>
        <div className="row my-3" >
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key = {element.url}>
                <NewsItem 
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}/>
              </div>
            );
          })}
        </div>
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark"onClick={this.handleNextClick}>Next &raquo;</button>
          </div>

      </div>
    );
  }
}

export default News;
