import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StoryList from './components/StoriesPage/StoryList';
import LoginPage from './components/Admin/Login/LoginPage';
import SubmissionPage from './components/StorySubmissions/SubmissionPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={StoryList}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/submissions" component={SubmissionPage}/>

      </div>
    );
  }
}

export default App;
