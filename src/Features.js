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
		title: "Continuous Liquidity",
		description:
			"Fantasy stocks can be acquired and sold back at any time, managed by smart-contracts",
	},
	{
		icon: <SolutionOutlined />,
		title: "Real-Life Performance",
		description:
			"Prices influenced by real life performance. Outsmart other users by leveraging your sports knowledge",
	},
	{
		icon: <ApiOutlined />,
		title: "Blockchain Technology",
		description:
			"Fanance Club uses the blockchain to provide transparency, decentralization, continuous liquidity and true digital ownership",
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
			}}
		>
			<Title style={{ color: "white", padding: "25px 25px 0 25px" }}>
				FEATURES
			</Title>
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
						<Card
							bordered={false}
							style={{ backgroundColor: "#18ffff", borderRadius: "12px" }}
							hoverable={true}
						>
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
						</Card>
					</List.Item>
				)}
				style={{ padding: "20px" }}
			/>
		</div>
	);
}

export default Features;
