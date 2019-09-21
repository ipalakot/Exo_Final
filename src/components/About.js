import React, { Component } from 'react';
import { keys } from '../Keys';

class About extends Component {
  state = {
    data: []
  };

  getItems = async () => {
    const {
      match: {
        params: { category }
      }
    } = this.props;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${keys.API_KEY}`
    );
    const data = await response.json();
    this.setState({ data: data.articles });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? (
          data.map((article, index) => {
            return (
              <div key={index}>
                <h4>{article.title}</h4>
                <p>
                  <span>author:</span> {article.author}{' '}
                  <span>published at: </span>
                  {article.publishedAt}
                </p>
                <img src={article.urlToImage} alt="Article View" />
                <p>{article.content}</p>
                <p>Description: {article.description}</p>
                <p>Source: {article.source.name}</p>
              </div>
            );
          })
        ) : (
          <h4>Loading. . .</h4>
        )}
      </div>
    );
  }
}

export default About;
