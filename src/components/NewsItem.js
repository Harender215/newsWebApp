import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (  
        <div className="my-3">
            <div className="card">
            <img src={imageUrl!=null ? imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/221030041925-08-seoul-stampede-103022.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
            </div>
            </div>
        </div>
    )
  }
}

export default NewsItem