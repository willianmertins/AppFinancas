import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyARbVGrNBi_LXpBsxciRTcf0gtB255WQmI",
    authDomain: "meuapp-1996c.firebaseapp.com",
    databaseURL: "https://meuapp-1996c-default-rtdb.firebaseio.com",
    projectId: "meuapp-1996c",
    storageBucket: "meuapp-1996c.appspot.com",
    messagingSenderId: "147685187949",
    appId: "1:147685187949:web:dd77b16754241c2fa3fa64",
    measurementId: "G-Q3HJLLRHC3"
  };
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  };
  export default firebase;
  