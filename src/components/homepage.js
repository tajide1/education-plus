import React, { Component } from 'react';
import fire from '../config/firebase';
import Feeds from './Feeds';
import Upload from './Upload';

class Home extends Component {
    logout() {
        fire.auth().signOut();
    }

    render() {
        return ( <
            div > { /* <Feeds></Feeds> */ } <
            Upload > < /Upload> 
            <div className = 'Login' > { /*should take you to the login page*/ } 
                {/* <button onClick = {} > < /button> */}
                </div>
            <div className = 'Economics' >
                {/*<button onCLick = {} > < /button>*/} <
            /div> <
            div className = 'Law' >
                {/*<button onCLick = {} > </button>*/}
            </div> <
            div className = 'Engineering' >
                {/*<button onCLick = {} > < /button>*/}
            </div> <
            div className = 'More' >
                {/*<button onCLick = {} > < /button>*/} 
                </div> <
            div className = 'Rectangle-5' > < /div> <
            div className = 'Rectangle-4' > < /div> <
            div className = 'Rectangle-1' > < /div> <
            div className = 'Rectangle-7' > < /div> <
            div className = 'Ellipse-15' > < /div> <
            div className = 'Ellipse-14' > < /div> <
            div className = 'Ellipse-9' > < /div> <
            div className = 'Ellipse-11' > < /div> <
            div className = 'Ellipse-16' > < /div> <
            div className = 'e5dd1099f6d3ed362ac6dbfeb7a5' > < /div> <
            div className = 'Education-is-for-everyone-Watch-the-great-minds-of-today-teach-and-choose-your-own-professors' > < /div> <
            div className = 'Democratize-Education-Rate-your-lectures-delve-into-the-world-of-education-rate-your-professors-and-choose-yourself-who-you-want-to-listen-to' > < /div> <
            button onClick = { this.logout } > Logout < /button> <
            /div>
        )
    }

}

export default Home;
