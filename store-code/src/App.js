import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Manageposts from './components/managepostspage/index';
import Addnewpost from './components/addnewpost/index';
import Profile from './components/profile/index';
import Addtravelnewpost from "./components/add-travel-new-post/index"
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Manageposts />} />
          <Route exact path='/add-travel-new-post' element={<Addtravelnewpost/>}/>
          <Route exact path="/addnewpost" element={<Addnewpost />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  );
}

export default App;
