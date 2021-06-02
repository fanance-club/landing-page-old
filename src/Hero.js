import { Row, Col, Button } from "antd";
import "./hero.css";

function Hero() {
	return (
		<div className="hero">
			<Row justify="space-around" align="middle">
				<Col xs={24} sm={24} md={16} lg={16} xl={16}>
					<div className="title">
						<img src="/logo.png" width="70%" className="hero-logo" />
						<h2
							className="hero-sub-title"
							style={{  color: "white",textShadow:"0px 0px 3px black", }}
						>
							Finance for Fans
						</h2>
						<h2
							style={{
								color: "white",
								fontWeight: "bold",
								textShadow:"1px 1px 5px #263238",
								textAlign:"center"
							}}
							className="hero-text"
						>
							Your knowledge and passion towards your favourite sports players
							is gonna make you Money from now on!!!
						</h2>
						<a href="#register">
							<Button
								type="primary"
								size="large"
								style={{
									backgroundColor: "#FF6D00",
									borderColor: "transparent",
									borderRadius: "5px",
									color: "white",
									fontWeight: "bold",
								}}
							>
								Get Early Access
							</Button>
						</a>
					</div>
				</Col>
				<Col xs={24} sm={24} md={8} lg={8} xl={8}>
					<img className="hero-image" src="/soccer-hero.png" />
				</Col>
			</Row>
		</div>
	);
}

export default Hero;
