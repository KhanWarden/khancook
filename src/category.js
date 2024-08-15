import React from 'react';
import './category1.css'
import { Link } from 'react-router-dom';

const Category1 = () => {
  return (
    <div className="recipes">
      <h5>Recipes for a healthy life</h5>
      <div className="recipes1">
        <div className="recipe1">
          <Link to="/recipe">
            <img src="img/1-1.jpg" alt="Recipe 1" />
            <h5>Tortillas with cheese "Easy as pie"</h5>
          </Link>
        </div>
        <div className="recipe2">
          <a href="recipe.html">
            <img src="img/1-2.jpg" alt="Recipe 2" />
            <h5>Delicious cheese tortillas in 5 minutes</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category1;
