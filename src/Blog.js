import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="categories">
      <div className="first_category">
        <Link to="/category1">
          <img src="img/category1.jpg" className="category_image" alt="Category 1" />
          <h5>Recipes for a healthy life</h5>
        </Link>
      </div>
      <div className="second_category">
        <img src="img/category2.jpg" className="category_image" alt="Category 2" />
        <h5>Recipes for the holidays</h5>
      </div>
      <div className="third_category">
        <img src="img/category3.jpg" className="category_image" alt="Category 3" />
        <h5>First and second courses</h5>
      </div>
    </div>
  );
};

export default Blog;