import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Blog from './Blog';
import Dictionary from './Dictionary';
import MainPage from './mainpage';
import Login from './Login';
import Register from './Register';
import Category1 from './category';
import Recipe from './recipe';


const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/category1" element={<Category1 />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
