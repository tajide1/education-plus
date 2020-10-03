import React, { Component } from 'react';
import fire from './config/firebase';
import Login from './components/Login';
import Home from './components/Home'
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);

  }

  componentDidMount() {
      this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged( (user) => {
      console.log(user);
      if(user) {
        this.setState({user});
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({user : null});
        //localStorage.removeItem('user');
      }
    });
  }
  
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    );
  }
}


export default App;
