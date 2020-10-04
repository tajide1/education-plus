import React, { Component } from 'react';
import fire from '../config/firebase';
import Feed from './Feed';


class Feeds extends Component{
    state={
        feeds:null
    }

    async componentDidMount() {
        //Get from firebase
        const feeds = null;
        this.setState(feeds)
    }


    render(){
        const {feeds} = this.state;
        return(
            <div>
                {
                   feeds &&
                   feeds.map(({...f}) =><Feed key={f.id} {...f}/>) 
                }
            </div>
        )
    }

}

export default Feeds