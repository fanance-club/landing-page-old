import { Layout, Menu } from "antd";
const { Header } = Layout;

const Navbar = () => {
	return (
		<Header
			style={{
				zIndex: 1,
				width: "100%",
				backgroundColor: "#263238",
				boxShadow: "0px 1px 10px",
			}}
		>
			<Menu
				mode="horizontal"
				style={{
					float: "right",
					backgroundColor: "#263238",
					height: "64px",
					borderColor: "#263238",
				}}
			>
				<Menu.Item key="whitepaper">
					<a
						href="/whitepaper.pdf"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#18ffff", fontWeight: "bold" }}
					>
						WHITEPAPER
					</a>
				</Menu.Item>
				<Menu.Item key="litepaper">
					<a
						href="https://fanance-club.gitbook.io/fanance-club/lite-paper"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#18ffff", fontWeight: "bold" }}
					>
						LITEPAPER
					</a>
				</Menu.Item>
				<Menu.Item key="FAQ">
					<a
						href="https://fanance-club.gitbook.io/fanance-club/faqs"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#18ffff", fontWeight: "bold" }}
					>
						FAQs
					</a>
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default Navbar;
