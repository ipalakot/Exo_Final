import React from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h2>Articles Categories</h2>
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
