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

import ReactGA from "react-ga";

const trackingId = "UA-198554307-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<About />
			<DAPP />
			<Features />
			<FANCToken />
			<Roadmap />
			<Register />
			<Footer />
		</div>
	);
}

export default App;
