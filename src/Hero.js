import { Image, Row, Col } from "antd";
import "./hero.css";

function Hero() {
	return (
		<div className="hero">
			<Row>
				<Col xs={24} sm={24} md={16} lg={16} xl={16}>
					<div class="title">
						<h1 className="hero-brand">
							FANANCE
							<br />
							CLUB
						</h1>
					</div>
				</Col>
				<Col xs={24} sm={24} md={8} lg={8} xl={8}>
					<Image className="hero-image" src="soccer-hero.png" responsive />
				</Col>
			</Row>
		</div>
	);
}

export default Hero;
