import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import UsersList from './components/UsersList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { this.setState({ users: res.data.data.users }); })
    .catch((err) => { console.log(err); })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DevOpsTools</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <br/>
              <h1>All Users</h1>
              <hr/><br/>
              <UsersList users={this.state.users}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
