import * as firebase from 'firebase'

var config = {

};

firebase.initializeApp(config);

const database = firebase.database()

export {database}