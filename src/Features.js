import { Row, Col, Card, List, Typography } from "antd";

import "./register.css";
import {
	BgColorsOutlined,
	DollarCircleOutlined,
	SolutionOutlined,
	ApiOutlined,
	StarOutlined,
	SwapOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
const data = [
	{
		icon: <ApiOutlined />,
		title: "Buy, Sell or Trade",
		description:
			"Your favourite Sport Player’s Stock just like stocks in stock market or cryptos in crypto market",
	},
	{
		icon: <BgColorsOutlined />,
		title: "Be a Liquidity Provider",
		description:
			"Provide Liquidity to “FANC-ADA” or any “PLAYER- FANC” pool and avail LP Tokens",
	},
	{
		icon: <SolutionOutlined />,
		title: "Stake your LP Token",
		description:
			"Stake your LP Tokens to Farm lucrative APYs and also to get a % of Transaction fee proportionate to your contribution in the pools",
	},
	{
		icon: <DollarCircleOutlined />,
		title: "Buy Player's NFT",
		description:
			"Bid the auction and win the unique ( Only 1 per player) NFT for each Player. Enjoy the ownership of the Player’s NFT along with % of Player’s Transaction fee and Farm APY without staking. The ownership can be sold via opening an auction",
	},
	{
		icon: <SwapOutlined />,
		title: "Predict and Win",
		description:
			"Predict the game outcome and win FANC tokens from game pool",
	},
	{
		icon: <StarOutlined />,
		title: "Be a decision maker",
		description: "As community driven, your voice will be heard via your votes for every critical decision in the platform",
	},
];

function Features() {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(0deg, rgb(255,255,255,0.7), rgb(255,255,255,0.7)),url('/football-stadium-ball-bg.jpg')",
				textAlign: "center",
				backgroundSize: "cover",
				backgroundPosition: "bottom",
				padding: "20px",
			}}
			id="features"
		>
			<Title style={{ color: "black", padding: "25px 25px 0 25px" }}>
				FEATURES
			</Title>

			<List
				grid={{
					gutter: 16,
					xs: 1,
					sm: 1,
					md: 2,
					lg: 3,
					xl: 3,
					xxl: 3,
				}}
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<Row justify="space-around" align="middle" style={{padding:"20px"}}>
							<Card
								bordered={false}
								style={{
									backgroundColor: "rgb(255,255,255,0.8)",
									borderRadius: "12px",
									height:"250px"
								}}
								hoverable={true}
							>
								<Col
									span={24}
									style={{
										fontSize: "50px",
										color: "black",
										textAlign: "center",
									}}
								>
									{item.icon}
								</Col>
								<Col span={24} style={{ textAlign: "center" }}>
									<span
										style={{
											fontSize: "20px",
											fontWeight: "bold",
											color: "black",
										}}
									>
										{item.title}
									</span>
									<br></br>
									<p style={{ color: "black", textAlign: "justify" }}>
										{item.description}
									</p>
								</Col>
							</Card>
						</Row>
					</List.Item>
				)}
				style={{ padding: "10px" }}
			/>
			<br></br>
		</div>
	);
}

export default Features;
