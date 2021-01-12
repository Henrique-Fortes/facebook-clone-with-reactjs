import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCRAeFjvomGJNTjFcKPqRK8Fu1vWFA0QQ4",
	authDomain: "facebook-clone-c3452.firebaseapp.com",
	projectId: "facebook-clone-c3452",
	storageBucket: "facebook-clone-c3452.appspot.com",
	messagingSenderId: "269801135424",
	appId: "1:269801135424:web:df4662ec0064de390aaea5",
	measurementId: "G-PDMG2GP5TW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
