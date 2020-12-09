function About() {
	return (
		<div style={{ textAlign: "center" }}>
			<h1 style={{ color: "white" }}>ABOUT FANANCE CLUB</h1>
			<div
				className="site-layout-content"
				style={{ padding: "0 25px 0 25px", fontSize: "20px" }}
			>
				<p style={{ textAlign: "justify" }}>
					Fanance Club is a Celebrity Trading platform powered by Blockchain
					(Ethereum and Matic network). By using your sports knowledge and
					predictions about the players' performances, you can trade and
					monetize digital assets which represent the player. The value of the
					digital assets vary based on real-world events
				</p>
				<img
					src="/personal-project-react/about-exchange.jpg"
					alt="Exchange"
					className="about-image"
				/>
				<br></br>
				<br></br>
			</div>
		</div>
	);
}

export default About;
