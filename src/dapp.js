import { Typography, Row, Col } from "antd";
import "./App.less";
import YoutubeEmbed from "./YoutubeEmbed";
const { Title } = Typography;
function DAPP() {
	return (
		<Row
			justify="center"
			align="middle"
			style={{ backgroundColor: "radial - gradient(#e66465, #9198e5)" }}
			className="radialbg"
			id="dapp"
		>
			<Col xs={24} md={12} style={{ color: "#263238" }}>
				<div style={{ textAlign: "center", padding: "20px" }}>
					<YoutubeEmbed embedId="xE1i1Cafu5k" />
				</div>
			</Col>
			<Col xs={24} md={24} style={{ textAlign: "center" }}>
				<Title style={{ color: "black", padding: "25px 25px 0 25px" }}>
					USER FLOW
				</Title>
				<img src="/user-flow.png" className="dapp-image-width" />
			</Col>
		</Row>
	);
}

export default DAPP;
