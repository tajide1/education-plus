import  firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBdCHC35JrPw1GOVifuK7-zE2Q5DgL--sU",
  authDomain: "education-plus-2125a.firebaseapp.com",
  databaseURL: "https://education-plus-2125a.firebaseio.com",
  projectId: "education-plus-2125a",
  storageBucket: "education-plus-2125a.appspot.com",
  messagingSenderId: "502124255424",
  appId: "1:502124255424:web:059370b5af3681019b3525"
};

const fire = firebase.initializeApp(config)

export default fire;