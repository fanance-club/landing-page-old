import { Row, Col, Card } from "antd";

function Features() {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(0deg, 	rgb(24,255,255,0.5), rgb(0,0,0,0.8)),url('https://cheaphotels4uk.com/wp-content/uploads/2017/06/football-stadium-ball-bg.jpg')",
				textAlign: "center",
				backgroundSize: "cover",
				backgroundPosition: "bottom",
			}}
		>
			<h1 style={{ color: "white", padding: "25px 25px" }}>FEATURES</h1>
			<Row style={{ padding: "0 0 25px 0" }} justify="center">
				<Col span={24}>
					<Card
						title="Own your favourite players"
						bordered={false}
						style={{ color: "black", textAlign: "justify" }}
						className="feature-card"
					>
						Outsmart other users by buying first in IPO. Maximise the upside of
						your token value by owning the very first issued tokens in initial
						offering. On top of that enjoy a % of other users' transaction fee
						for every transaction of your IPO owned stock.
					</Card>
				</Col>
				<Col span={24}>
					<Card
						title="Leverage your knowledge"
						bordered={false}
						style={{ color: "black", textAlign: "justify" }}
						className="feature-card"
					>
						All the knowledge you have gained about your favourite celebrity in
						all these years is gonna help you win big by trading at the right
						time. The prices of the assets are based on real time game
						performance and hence you have a great leverage.
					</Card>
				</Col>
				<Col span={24}>
					<Card
						title="Blockchain Security"
						bordered={false}
						style={{ color: "black", textAlign: "justify" }}
						className="feature-card"
					>
						Fanance uses the revolutionary Blockchain Technology and Smart
						Contracts to provide unmatched security for your assets and trading.
						The entire ecosystem is completely transparent and immutable. There
						are no chances of hacking or cheating because of this technology.
					</Card>
				</Col>

				<Col span={24}>
					<Card
						title="No time limitations"
						bordered={false}
						style={{ color: "black", textAlign: "justify" }}
						className="feature-card"
					>
						You can buy and sell your favourite players at any time 24*7. Choose
						whether you want to do Intra-Day trading or hold the assets for a
						long time.
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default Features;
