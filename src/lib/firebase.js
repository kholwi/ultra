import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyD0Az3hn_up5-tPemD5Ty1P3LtJYuZL5Cw",
    authDomain: "ultra-fd867.firebaseapp.com",
    databaseURL: "https://ultra-fd867-default-rtdb.firebaseio.com",
    projectId: "ultra-fd867",
    storageBucket: "ultra-fd867.appspot.com",
    messagingSenderId: "186748452184",
    appId: "1:186748452184:web:821adb1d83f44bc74f392d"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
