import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Main-Styles/App.scss';

import NavBar from './components/NavBar/NavBar';
import StoryList from './components/StoriesPage/StoryList/StoryList';
import LoginPage from './components/Admin/Login/LoginPage';
import SignUpPage from './components/Admin/SignUp/SignUpPage';
import SubmissionPage from './components/StorySubmissions/SubmissionPage';
import SubmitPage from './components/SubmitStory/SubmitPage';


class App extends Component {
  logout(){
    localStorage.removeItem('jwt');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <NavBar
          logout={this.logout}
        />
        <Route exact path="/" component={StoryList}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/submissions" component={SubmissionPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/submit" component={SubmitPage} />
      </div>
    );
  }
}

export default App;
