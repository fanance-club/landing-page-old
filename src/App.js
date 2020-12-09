import "./App.less";
import Hero from "./Hero.js";
import About from "./About.js";
import Features from "./Features.js";
import FAQ from "./FAQ.js";
import Register from "./Register.js";
import { Layout } from "antd";
const { Footer } = Layout;

function App() {
	return (
		<div className="App">
			<Hero />
			<About />
			<Features />
			<Register />
			<FAQ />
			<Footer style={{ textAlign: "center", backgroundColor: "#263238" }}>
				Fanance Club ©2020
			</Footer>
		</div>
	);
}

export default App;
