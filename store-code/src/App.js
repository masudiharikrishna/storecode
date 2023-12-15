import React, { Component } from 'react';
import Manageposts from './components/managepostspage/index';
import Addnewpost from './components/addnewpost/index';
import Header from "./components/Header/index"
import './App.css';

class App extends Component{
  state = {
    managepostpage: true
  }

  handleAddNewPostClick = () => {
    this.setState((prevState) => ({
        managepostpage: !prevState.managepostpage,
    }));
  };

  handleBackButtonClick = () => {
    this.setState({
        managepostpage: true,
    });
};

  render(){
    const {managepostpage} = this.state;
    return(
      <div>
        <Header managepostpage= {managepostpage}/>
        {managepostpage? 
        <Manageposts onAddNewPostClick={this.handleAddNewPostClick}/> : 
        <Addnewpost onBackButtonClick={this.handleBackButtonClick}/>}
      </div>
    )
  }
}

export default App;
