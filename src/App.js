import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import jsonp from 'jsonp';
import Feed from 'rss-to-json';


class App extends Component {

  componentDidMount(){
    Feed.load('https://codek.tv/feed/', function(err, rss){
      console.log(rss);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;