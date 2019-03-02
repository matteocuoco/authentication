import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5Oz2TuSHd0NF9C3bQ3CB0SMjX14gb7Hg",
    authDomain: "authentication-7312c.firebaseapp.com",
    databaseURL: "https://authentication-7312c.firebaseio.com",
    projectId: "authentication-7312c",
    storageBucket: "authentication-7312c.appspot.com",
    messagingSenderId: "615763529684"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    //Auth API
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPassowordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

}

  export default Firebase;