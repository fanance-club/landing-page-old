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
			id="dapp"
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
					<Col xs={24} md={18}>
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
	);
}

export default DAPP;
