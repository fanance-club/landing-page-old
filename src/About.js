import { Typography, Row, Col, Card } from "antd";
import YoutubeEmbed from "./YoutubeEmbed";
const { Title } = Typography;
function About() {
	return (
		<Row
			justify="center"
			align="middle"
			id="about-us"
			style={{ backgroundColor: "white" }}
		>
			<Col xs={24} md={12} style={{ padding: "40px" }}>
				<Card
					bordered={false}
					style={{
						borderRadius: "12px",
						width: "100%",
						color: "black",
					}}
					className="radialbginvert"
				>
					<b style={{ fontSize: "20px" }}>
						How is Real Life Performance linked?
					</b>
					<br></br>
					<span style={{ fontSize: "12px" }}>
						Every month , the number of player tokens will be minted based on
						his/her real-life performance. These tokens are distributed to NFT
						owners & LP Stakers. Thus the player's performance directly
						influences users to Buy or sell or hold making it truly linked to
						real-life performance.
					</span>
				</Card>
			</Col>
			<Col xs={24} md={12} style={{ color: "white", textAlign: "center" }}>
				<img
					src="/soccer-hero-2.png"
					alt="soccer-hero"
					style={{ padding: "40px", width: "80%" }}
				/>
			</Col>
		</Row>
	);
}

export default About;
