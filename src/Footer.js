import { Layout, Row, Col, Divider } from "antd";
const { Footer } = Layout;

function FooterContent() {
	return (
		<Footer
			style={{
				color: "white",
				textAlign: "center",
				backgroundColor: "#263238",
			}}
		>
			<Row align="center">
				<Col
					xs={24}
					sm={24}
					md={24}
					lg={12}
					style={{ textAlign: "justify", padding: "20px" }}
				>
					<Divider orientation="left" style={{ color: "white" }}>
						Disclaimer
					</Divider>
					Fanance Club is neither affiliated by nor associated with any private
					or government sports leagues and tournaments, until and unless
					expressly stated by the Company. In addition to this, Fanance club is
					not related to and does not claim any official status with any of the
					official or non-official sports team or sportsperson including but not
					limited to any official governing body of any sports or teams in any
					countries
				</Col>
				<Col
					xs={24}
					sm={24}
					md={24}
					lg={12}
					style={{ textAlign: "justify", fontWeight: "bold", padding: "20px" }}
				>
					<Divider orientation="left" style={{ color: "white" }}>
						Useful Links
					</Divider>
					<Row>
						<Col xs={24} sm={12} md={12} lg={12}>
							<a href="/whitepaper.pdf" target="_blank" rel="noreferrer">
								Whitepaper
							</a>
							<br></br>
							<a
								href="https://fanance-club.gitbook.io/fanance-club/lite-paper"
								target="_blank"
								rel="noreferrer"
							>
								Litepaper
							</a>
							<br></br>
							<a
								href="https://fanance-club.gitbook.io/fanance-club/faqs"
								target="_blank"
								rel="noreferrer"
							>
								FAQs
							</a>
							<br></br>
							<a href="#about-us">About Us</a>
						</Col>
						<Col xs={24} sm={12} md={12} lg={12}>
							<a href="#dapp">dAPP</a>
							<br></br>
							<a href="#features">Features</a>
							<br></br>
							<a href="#fanc-token">FANC Token</a>
							<br></br>
							<a href="#roadmap">Roadmap</a>
						</Col>
					</Row>
				</Col>
			</Row>
			Fanance Club ©2020
		</Footer>
	);
}

export default FooterContent;
