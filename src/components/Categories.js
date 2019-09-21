import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Shop = () => {
  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];
  return (
    <div className="articles-categories">
      <h2 className="heading">Articles Categories</h2>
      {categories.map((category, index) => {
        return (
          <Link key={index} to={`/About/${category}`}>
            <li>{category}</li>
          </Link>
        );
      })}
    </div>
  );
};

export default Shop;
