import { Typography, Row, Col } from "antd";
import YoutubeEmbed from "./YoutubeEmbed";
const { Title } = Typography;
function About() {
	return (
		<Row justify="space-around" align="middle" id="about-us">
			<Col xs={0} sm={0} md={9} className="only-large-screen">
				<YoutubeEmbed embedId="xE1i1Cafu5k" />
			</Col>
			<Col xs={24} md={15} style={{ color: "white" }}>
				<Title
					levle={2}
					style={{
						color: "white",
						padding: "0 10px 0 10px",
						textAlign: "center",
					}}
				>
					ABOUT FANANCE CLUB
				</Title>
				<div
					className="site-layout-content"
					style={{ padding: "0 10px 0 10px", fontSize: "20px" }}
				>
					<p style={{ textAlign: "justify"}} className="large-padding">
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
			<Col xs={24} sm={24} md={0} className="only-small-screen">
				<YoutubeEmbed embedId="xE1i1Cafu5k" />
			</Col>
		</Row>
	);
}

export default About;
