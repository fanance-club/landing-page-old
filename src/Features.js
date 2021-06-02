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
		icon: <BgColorsOutlined />,
		title: "AMM based Liquidity",
		description:
			"Ability to buy and sell players anytime managed by smart-contracts - No more order books",
	},
	{
		icon: <ApiOutlined />,
		title: "Cardano Blockchain",
		description:
			"Fanance Club uses the Cardano blockchain to provide transparency, security, decentralization, AMM based liquidity and secure ownership",
	},
	{
		icon: <SolutionOutlined />,
		title: "Real-Life Performance",
		description:
			"Prices influenced by players' real life performance. Stay ahead of other users by leveraging your sports knowledge",
	},
	{
		icon: <DollarCircleOutlined />,
		title: "Staking Rewards",
		description:
			"Stake LP & earn FANC or Players tokens with Lucrative APYs & Txn fee",
	},
	{
		icon: <StarOutlined />,
		title: "NFT Ownership",
		description:
			"Be an owner of Player’s NFT & maximise the upside by enjoying Lucrative Player token’s APYs & tnx fees",
	},
	{
		icon: <SwapOutlined />,
		title: "Prediction Market",
		description: "Predict the match outcome and win amazing returns",
	},
];

function Features() {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(0deg, 	rgb(24,255,255,0.5), rgb(0,0,0,0.9)),url('/football-stadium-ball-bg.jpg')",
				textAlign: "center",
				backgroundSize: "cover",
				backgroundPosition: "bottom",
				padding: "20px",
			}}
			id="features"
		>
			<Title style={{ color: "white", padding: "25px 25px 0 25px" }}>
				FEATURES
			</Title>
			<Card
				bordered={false}
				style={{ backgroundColor: "rgb(38,50,56,0.5", borderRadius: "12px" }}
				hoverable={true}
			>
				<List
					grid={{
						gutter: 16,
						xs: 1,
						sm: 2,
						md: 3,
						lg: 3,
						xl: 3,
						xxl: 3,
					}}
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<Row
								justify="space-around"
								align="middle"
								style={{ color: "#18ffff" }}
							>
								<Col span={6} style={{ fontSize: "50px" }}>
									{item.icon}
								</Col>
								<Col span={18} style={{ textAlign: "justify" }}>
									<span style={{ fontSize: "20px", fontWeight: "bold" }}>
										{item.title}
									</span>
									<br></br>
									<span style={{ color: "white" }}>{item.description}</span>
								</Col>
							</Row>
						</List.Item>
					)}
					style={{ padding: "10px" }}
				/>
			</Card>
			<br></br>
		</div>
	);
}

export default Features;
