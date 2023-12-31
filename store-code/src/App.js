import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExploreTravelGuide from './components/explore-travel-guide';
import Addnewpost from './components/addnewpost/index';
import Profile from './components/profile/index';
import ProfileDashboard from './components/profile-dashboard';
import ExploreProductGuide from "./components/explore-product-guide/index"
import Addtravelnewpost from "./components/add-travel-new-post/index";
import Home from "./components/Home/index";
import TravelGuidePostPage from './components/travel-guide-post-page';
import TravelGuideProfile from './components/travel-guide-profile'; 
import ProductGuideProfile from './components/product-guide-profile';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/profile-dashboard' element={<ProfileDashboard/>}/>
          <Route exact path='/add-travel-new-post' element={<Addtravelnewpost/>}/>
          <Route exact path="/addnewpost" element={<Addnewpost />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/explore-travel-guide" element={<ExploreTravelGuide/>}/>
          <Route exact path="/explore-product-guide" element={<ExploreProductGuide/>}/>
          <Route exact path="/product-guide-profile" element={<ProductGuideProfile/>}/>
          <Route exact path='/travel-guide-profile' element={<TravelGuideProfile/>}/>
          <Route exact path="/travel-guide-post-page" element={<TravelGuidePostPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
