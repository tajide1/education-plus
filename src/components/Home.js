import React, { Component } from 'react';
import fire from '../config/firebase';

class Home extends Component {
    logout() {
        fire.auth().signOut();
      }
    
      render() {
        return (
          <div style={{textAlign: 'center'}}>
            <h1>You Are Logged In</h1>
            <button onClick = {this.logout}>Logout</button>
          </div>
        )
      }

}

export default Home;