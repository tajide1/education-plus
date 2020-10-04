import React, { Component } from 'react';
import fire from '../config/firebase';
import Feeds from './Feeds';
import Upload from './Upload';

class Home extends Component {
    logout() {
        fire.auth().signOut();
      }
    
      render() {
        return (
          <div>
            {/* <Feeds></Feeds> */}
            <Upload></Upload>

            <button onClick = {this.logout}>Logout</button>
          </div>
        )
      }

}

export default Home;