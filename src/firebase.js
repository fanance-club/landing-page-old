import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAQqsi0kEPF8WUaDHh28OgQpcsyRIgEWaU",
	authDomain: "fanance-club-landing-page.firebaseapp.com",
	projectId: "fanance-club-landing-page",
	storageBucket: "fanance-club-landing-page.appspot.com",
	messagingSenderId: "1010747472200",
	appId: "1:1010747472200:web:b2b35829394454a3381b7d",
	measurementId: "G-VJE58H7HTE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default firebase;
