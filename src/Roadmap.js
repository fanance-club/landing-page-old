import { Timeline, Typography } from "antd";
import "./features.css";
const { Title } = Typography;
function Features() {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(0deg, 	rgb(0,0,0,0.7), rgb(0,0,0,0.8)),url('/football-player-bg.jpg')",

				backgroundSize: "cover",
				backgroundPosition: "bottom",
			}}
			id="roadmap"
		>
			<Title
				style={{ color: "white", padding: "25px 25px", textAlign: "center" }}
			>
				ROADMAP
			</Title>
			<div>
				<Timeline
					mode="left"
					style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}
				>
					<Timeline.Item label="Q4 2020" color="green">
						Idea Conceptualization<br></br>Market Research
					</Timeline.Item>
					<Timeline.Item label="Q1 2021" color="green">
						Built and tested few key modules in Ethereum Rinkeby Testnet
						<br></br>(Only for Testing purposes)
					</Timeline.Item>
					<Timeline.Item label="Q2 2021" color="yellow">
						Website Launch
						<br />
						Social Media Launch
						<br />
						Community Channel Launch (Twitter & Discord)
						<br />
						White Paper Release
						<br />
						Private Sale
					</Timeline.Item>
					<Timeline.Item label="Q3 2021">
						Pre Sale Round 1 ( Very Early Adopter Sale Round)
						<br />
						TestNet Launch
					</Timeline.Item>
					<Timeline.Item label="Q4 2021">
						Pre-sale Round 2 ( Early Adopter Sale Round)
						<br />
						Community Sale (Initial Stake Pool Offering)
						<br />
						Exchange Listings
						<br />
						MainNet Phase 1
					</Timeline.Item>
					<Timeline.Item label="Q1 2022">
						Main Net Phase 2
						<br />
						Partnerships with Sports Bodies / Players
					</Timeline.Item>
					<Timeline.Item label="Q2 2022">
						Main Net Phase 3
						<br />
						Main Net Phase 4
						<br />
						Partnerships with Sports Bodies / Players Expansion
					</Timeline.Item>
					<Timeline.Item label="Q3 2022">
						New Sports / Market Addition ( Selected by Community Voting)
					</Timeline.Item>
					<Timeline.Item label="Q4 2022">
						Completely Community-Driven Platform
					</Timeline.Item>
				</Timeline>
			</div>
		</div>
	);
}

export default Features;
