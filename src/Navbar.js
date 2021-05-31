import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
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
			<span className="logo">
				<span style={{ padding: "0 25px 0 25px" }}>
					<a
						href="https://fanance-club.gitbook.io/fanance-club/lite-paper"
						target="_blank"
						rel="noreferrer"
					>
						WHITEPAPER
					</a>
				</span>
				<span style={{ padding: "0 25px 0 25px" }}>
					<a
						href="https://fanance-club.gitbook.io/fanance-club/faqs"
						target="_blank"
						rel="noreferrer"
					>
						FAQs
					</a>
				</span>
			</span>
		</Header>
	);
};

export default Navbar;
