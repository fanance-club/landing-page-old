import { Typography, Row, Col } from "antd";
import "./App.less";
const { Title } = Typography;
function DAPP() {
	return (
		<Row
			justify="space-around"
			align="middle"
			style={{ backgroundColor: "radial - gradient(#e66465, #9198e5)" }}
			className="radialbg"
		>
			<Col xs={24} md={24} style={{ color: "#263238" }}>
				<Title
					levle={2}
					style={{
						color: "white",
						padding: "25px 25px 0 25px",
						textAlign: "center",
					}}
				>
					FANANCE CLUB - dAPP
				</Title>
				<Row
					className="site-layout-content"
					justify="center"
					style={{
						padding: "0 25px 0 25px",
						fontSize: "20px",
						color: "white",
					}}
				>
					<Col xs={24} md={12}>
						<p style={{ textAlign: "justify" }}>
							The Fanance Club’s Flagship product is the Fanance Club{" "}
							<b>
								dApp - a Decentralized Exchange (DEX) for celebrity or Sports
								stocks
							</b>
							, where economic incentives for users to trade in the game are
							connected to speculating real life performance, Staking Rewards,
							Liquidity Provider Rewards and Special benefits to NFT holders
						</p>
					</Col>
				</Row>
			</Col>
			<Col xs={24} md={24} style={{ textAlign: "center" }}>
				<img src="/user-flow.png" width="70%" />
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

export default DAPP;
