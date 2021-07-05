import { Layout, Menu } from "antd";
import { Route } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
	return (
		<Header
			style={{
				zIndex: 1,
				width: "100%",
				backgroundColor: "white",
				boxShadow: "0px 1px 10px",
			}}
		>
			<img
				src="logo-v3.png"
				style={{ float: "left", height: "100%" }}
				alt="logo"
				className="large-screen-only"
			/>
			<span
				className="large-screen-only"
				style={{ fontSize: "30px", fontWeight: "bold" }}
			>
				Fanance Club
			</span>
			<Menu
				mode="horizontal"
				style={{
					float: "right",
					backgroundColor: "white",
					height: "64px",
					borderColor: "white",
				}}
			>
				<Menu.Item key="home">
					<Route exact path="/team">
						<a href="/" style={{ color: "black", fontWeight: "bold" }}>
							HOME
						</a>
					</Route>
				</Menu.Item>

				<Menu.Item key="whitepaper">
					<a
						href="/whitepaper.pdf"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "black", fontWeight: "bold" }}
					>
						WHITEPAPER
					</a>
				</Menu.Item>
				<Menu.Item key="litepaper">
					<a
						href="https://fanance-club.gitbook.io/fanance-club/lite-paper"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "black", fontWeight: "bold" }}
					>
						LITEPAPER
					</a>
				</Menu.Item>
				<Menu.Item key="FAQ">
					<a
						href="https://fanance-club.gitbook.io/fanance-club/faqs"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "black", fontWeight: "bold" }}
					>
						FAQs
					</a>
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default Navbar;
