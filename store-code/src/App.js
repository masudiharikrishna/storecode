import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Manageposts from './components/managepostspage/index';
import ExploreTravelGuide from './components/explore-travel-guide';
import Addnewpost from './components/addnewpost/index';
import Profile from './components/profile/index';
import ExploreProductGuide from "./components/explore-product-guide/index"
import Addtravelnewpost from "./components/add-travel-new-post/index";
import Home from "./components/Home/index";
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/add-travel-new-post' element={<Addtravelnewpost/>}/>
          <Route exact path="/addnewpost" element={<Addnewpost />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/explore-travel-guide" element={<ExploreTravelGuide/>}/>
          <Route exact path="/explore-product-guide" element={<ExploreProductGuide/>}/>
        </Routes>
    </Router>
  );
}

export default App;
