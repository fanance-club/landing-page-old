import { Row, Col } from "antd";
function FAQ() {
	return (
		<div
			style={{
				"background-image":
					"linear-gradient(0deg, 	rgb(0,0,0,0.5), rgb(0,0,0,0.8)),url('https://sbo-thai88.com/wp-content/uploads/2020/01/Premier-league-index-2018-bg.jpg')",
				"text-align": "center",
				"background-size": "cover",
				"background-position": "center",
				"text-align": "center",
			}}
		>
			<h1 style={{ color: "white", padding: "25px 25px" }}>
				Frequently Asked Questions
			</h1>
			<Row
				style={{ padding: "0 20px 25px 20px", "text-align": "center" }}
				justify="center"
			>
				<Col xs={24} sm={24} md={12} lg={12} xl={12}>
					<h2 style={{ color: "#18ffff" }}>What is Fanance Club?</h2>
					<p>
						Fanance Club is the first celebrity trading platform built on the
						Ethereum blockchain. Based on real life performance and market
						supply and demand, you can trade player/celebrity stocks which
						values are influenced by the real life performance of your favorite
						sport players.
					</p>
				</Col>
				<Col xs={24} sm={24} md={12} lg={12} xl={12}>
					<h2 style={{ color: "#18ffff" }}>What can I do on Fanance Club?</h2>
					<p>
						You play buying and selling assets of your favorite celebrities and
						sports players. These stocks will increase or decrease in price
						based on the market supply and demand based on the celebrity's real
						life performance.
					</p>
				</Col>
				<Col xs={24} sm={24} md={12} lg={12} xl={12}>
					<h2 style={{ color: "#18ffff" }}>
						What are the items I see on Fanance Club?
					</h2>
					<p>
						All the player markets you see on Fanance Club are fungible
						blockchain-based digital assets also called as ERC-20 tokens. They
						are owned by Ethereum wallets and forever live on the blockchain.
					</p>
				</Col>
				<Col xs={24} sm={24} md={12} lg={12} xl={12}>
					<h2 style={{ color: "#18ffff" }}>
						What do I need to use Fanance Club?
					</h2>
					<p>
						You just need a web browser to play, Chrome or Edge will do. There
						is no KYC required. In order to trade the assets, you will also need
						to fund your account with Ether
					</p>
				</Col>
			</Row>
		</div>
	);
}

export default FAQ;
