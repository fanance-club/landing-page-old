import "./App.less";
import Hero from "./Hero.js";
import About from "./About.js";
import DAPP from "./dapp.js";
import Features from "./Features.js";
import FANCToken from "./FANCToken.js";
import Roadmap from "./Roadmap.js";
import FAQ from "./FAQ.js";
import Register from "./Register.js";
import { Layout, Row, Col, Divider } from "antd";
import Navbar from "./Navbar";
const { Footer } = Layout;

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
			<Footer
				style={{
					color: "white",
					textAlign: "center",
					backgroundColor: "#263238",
				}}
			>
				<Row align="center">
					<Col
						md={24}
						lg={12}
						style={{ textAlign: "justify", fontWeight: "bold" }}
					>
						<Divider orientation="left" style={{ color: "white" }}>
							Useful Links
						</Divider>
						<a
							href="https://fanance-club.gitbook.io/fanance-club/faqs"
							target="_blank"
							rel="noreferrer"
						>
							Whitepaper
						</a>{" "}
						-{" "}
						<a
							href="https://fanance-club.gitbook.io/fanance-club/faqs"
							target="_blank"
							rel="noreferrer"
						>
							FAQs
						</a>
					</Col>
				</Row>
				<Row align="center">
					<Col md={24} lg={12} style={{ textAlign: "justify" }}>
						<Divider orientation="left" style={{ color: "white" }}>
							Disclaimer
						</Divider>
						Fanance Club is neither affiliated by nor associated with any
						private or government sports leagues and tournaments, until and
						unless expressly stated by the Company. In addition to this, Fanance
						club is not related to and does not claim any official status with
						any of the official or non-official sports team or sportsperson
						including but not limited to any official governing body of any
						sports or teams in any countries
					</Col>
				</Row>
				Fanance Club ©2020
			</Footer>
		</div>
	);
}

export default App;
