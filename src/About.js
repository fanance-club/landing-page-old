import { Typography, Row, Col } from "antd";
const { Title } = Typography;
function About() {
	return (
		<Row
			justify="space-around"
			align="middle"
			// style={{ backgroundColor: "#ffebee" }}
		>
			<Col xs={24} md={9}>
				<img src="/about.jpeg" width="100%" />
			</Col>
			<Col xs={24} md={15} style={{ color: "white" }}>
				<Title
					levle={2}
					style={{
						color: "white",
						padding: "0 25px 0 25px",
						textAlign: "center",
					}}
				>
					ABOUT FANANCE CLUB
				</Title>
				<div
					className="site-layout-content"
					style={{ padding: "0 25px 0 25px", fontSize: "20px" }}
				>
					<p style={{ textAlign: "justify", padding: "0 50px 0 50px" }}>
						Fanance Club is a Revolutionary & Deflationary DeFi cum Fantasy
						Stocks trading platform powered by the Cardano blockchain where
						users can trade digital assets or celebrity stocks that represent
						real-life performance statistics. It is a decentralized social
						gaming/trading experience in which people can express their passion
						for sports/their favorite stars, compete against each other, and
						show <b>“How much your craze for your favorite stars is worth”</b>
					</p>
				</div>
			</Col>
		</Row>
		// <div style={{ textAlign: "center", color: "white" }}>
		// 	<Title levle={2} style={{ color: "white" }}>
		// 		ABOUT FANANCE CLUB
		// 	</Title>
		// 	<div
		// 		className="site-layout-content"
		// 		style={{ padding: "0 25px 0 25px", fontSize: "20px" }}
		// 	>
		// 		<p style={{ textAlign: "justify" }}>
		// 			Fanance Club is a Revolutionary & Deflationary DeFi cum Fantasy Stocks
		// 			trading platform powered by the Cardano blockchain where users can
		// 			trade digital assets or celebrity stocks that represent real-life
		// 			performance statistics. It is a decentralized social gaming/trading
		// 			experience in which people can express their passion for sports/their
		// 			favorite stars, compete against each other, and show{" "}
		// 			<b>“How much your craze for your favorite stars is worth”</b>
		// 		</p>
		// 		<img src="/about-exchange.jpg" alt="Exchange" className="about-image" />
		// 		<br></br>
		// 		<br></br>
		// 	</div>
		// </div>
	);
}

export default About;
