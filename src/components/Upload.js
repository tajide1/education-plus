import React, { Component } from 'react';
import fire from '../config/firebase';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
         }
    

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const video = e.target.files[0];
            this.setState(() => ({video}));
        }
    }

    handleUpload = () => {
        const {video} = this.state;
        const uploadTask = fire.storage().ref(`videos/${video.name}`).put(video);
        uploadTask.on('state_changed', 
        (snapsot) => {
            const progress = Math.round((snapsot.bytesTransferred/ snapsot.totalBytes) * 100)
            this.setState({progress});
        }, 
        (error) => {
             // error function ....
          console.log(error);
        }, 
      () => {
          // complete function ....
          fire.storage().ref('videos').child(video.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
        })
    }
    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          };
        return (
            <div style={style}>
                <progress value={this.state.progress} max="100"/>
                <br/>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <br/>
                <video src={this.state.url || './pointing_black.mp4'} alt="Uploaded videos" height="300" width="400" autoPlay>video not playing</video>
            </div>
        )
    };
    
}

export default Upload;