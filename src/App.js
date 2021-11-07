import "./App.less";
import Hero from "./Hero.js";
import About from "./About.js";
import DAPP from "./dapp.js";
import Features from "./Features.js";
import FANCToken from "./FANCToken.js";
import Roadmap from "./Roadmap.js";
import Register from "./Register.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Team from "./Team";
import Sidebar from "./Drawer";
import firebase from "./firebase";
import queryString from "query-string";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		console.log("User signed in", user.displayName, user.uid);
	} else {
		console.log("No User signed in");
	}
});

function App() {
	const [user, setUser] = useState(0);
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, [firebase.auth()]);
	return (
		<Router>
			<div className="App">
				{/* <Navbar /> */}
				<Hero user={user} />
				{/* <Switch>
					<Route exact path="/team">
						<Team />
					</Route>
					<Route path="/">
						<Features />
						<DAPP />
						<About />
						<FANCToken />
						<Roadmap />
					</Route>
				</Switch> */}

				<Footer />
			</div>
		</Router>
	);
}

export default App;
