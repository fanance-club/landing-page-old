import { Typography, Row, Col, List } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "./App.less";
const { Title } = Typography;
const data = [
	{ content: "STAKE FANC-ADA LP and EARN APY & % of the transaction fee" },
	{ content: "Initial Star offering (ISO) Purchase" },
	{
		content: "Stake PLAYER - FANC LP and earn APY and % of the translation Fee",
	},
	{ content: "Buy / Sell player Token" },
	{ content: "Buy / Sell Player’s NFT" },
	{ content: "Participate in Prediction Markets" },
	{ content: "Governance & voting" },
];
function FANCToken() {
	return (
		<Row
			justify="space-around"
			align="middle"
			// style={{ backgroundColor: "#ffebee" }}
			id="fanc-token"
		>
			<Col xs={24} md={15} style={{ color: "white" }}>
				<Title
					levle={2}
					style={{
						color: "white",
						padding: "25px 25px 0 25px",
						textAlign: "center",
					}}
				>
					FANC Token
				</Title>
				<div
					className="site-layout-content"
					style={{ padding: "0 25px 0 25px", fontSize: "20px" }}
				>
					<p style={{ textAlign: "justify" }}>
						FANC is the deflationary token by nature with the total Maximum
						supply upon the Fanance club platform’s launch will be hard-capped
						to 500,000,000 FANC tokens and the minimum supply via burning
						mechanism will be capped to 100,000,000 FANC
					</p>
					<p style={{ textAlign: "justify" }}>
						FANC is a native token on the Cardano network. FANC token has
						multiple utility use cases that give you an enormous reason to BUY
						and HODL
					</p>
					<List
						size="small"
						split={false}
						style={{ padding: "0 20px 0 20px", fontSize: "14px" }}
						dataSource={data}
						renderItem={(item) => (
							<List.Item style={{ color: "white" }}>
								<CaretRightOutlined style={{ color: "#18ffff" }} />
								{item.content}
							</List.Item>
						)}
					></List>
				</div>
			</Col>
			<Col xs={24} md={9}>
				<img src="/token-distribution.png" width="100%" />
			</Col>
		</Row>
	);
}

export default FANCToken;
