import {
	Row,
	Col,
	Button,
	Drawer,
	Input,
	Typography,
	Divider,
	Checkbox,
	message,
} from "antd";
import React, { useState, useEffect } from "react";
import "./hero.css";
import { useLocation, Route } from "react-router-dom";
import { TwitterOutlined, GoogleOutlined } from "@ant-design/icons";
import firebase from "./firebase";
import { TwitterTweetEmbed, TwitterFollowButton } from "react-twitter-embed";
import {
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	TelegramIcon,
	RedditIcon,
	WhatsappIcon,
	FacebookShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	RedditShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import Navbar from "./Navbar";
const { Title } = Typography;

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

function Hero(props) {
	const [visible, setVisible] = useState(false);
	const [twitter1, setTwitter1] = useState(false);
	const [twitter2, setTwitter2] = useState(false);
	const [telegram1, setTelegram1] = useState(false);
	const [twitterHandle, setTwitterHandle] = useState("");
	const [telegramHandle, setTelegramHandle] = useState("");
	const [userDetails, setUserDetails] = useState(null);
	const setTwitter1State = () => {
		setTwitter1(!twitter1);
	};
	const setTwitter2State = () => {
		setTwitter2(!twitter2);
	};
	const setTelegram1State = () => {
		setTelegram1(!telegram1);
	};
	const setTwitterHandleStatus = (e) => {
		setTwitterHandle(e.target.value);
	};
	const setTelegramHandleStatus = (e) => {
		setTelegramHandle(e.target.value);
	};
	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	useEffect(() => {
		const db = firebase.firestore();
		if (props.user) {
			db.collection("users")
				.doc(props.user.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						setUserDetails(doc.data());
					} else {
						// doc.data() will be undefined in this case
						console.log("No such document!");
					}
				})
				.catch((error) => {
					console.log("Error getting document:", error);
				});
		}
	}, [firebase.auth(), props.user]);
	const onSubmit = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				// var credential = result.credential;

				// // This gives you a Google Access Token. You can use it to access the Google API.
				// var token = credential.accessToken;
				// // The signed-in user info.
				// var user = result.user;
				// // ...
				console.log("User logged in");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const signOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				setUserDetails(null);
				setTwitter1(false);
				setTwitter2(false);
				setTelegram1(false);
				setTwitterHandle("");
				setTelegramHandle("");
			});
	};
	const enrollUser = (referrer) => {
		const db = firebase.firestore();
		if (
			twitter1 &&
			twitter2 &&
			telegram1 &&
			twitterHandle != "" &&
			telegramHandle != ""
		) {
			if (referrer) {
				var ref = db.collection("users").doc(referrer);

				ref
					.get()
					.then((doc) => {
						if (doc.exists) {
							db.collection("users")
								.doc(referrer)
								.set(
									{
										referrees: firebase.firestore.FieldValue.arrayUnion(
											props.user.uid
										),
										tokenBalance: firebase.firestore.FieldValue.increment(10),
									},
									{ merge: true }
								);
						} else {
							// doc.data() will be undefined in this case
							console.log("No such document!");
						}
					})
					.catch((error) => {
						console.log("Error getting document:", error);
					});
			}

			db.collection("users")
				.doc(props.user.uid)
				.set({
					claimedTokens: 0,
					displayName: props.user.displayName,
					referrees: [],
					referrer: referrer,
					registeredAt: Date.now(),
					telegramId: document.getElementById("telegram").value,
					tokenBalance: 20,
					twitterId: document.getElementById("twitter").value,
				})
				.then(() => {
					var ref = db.collection("users").doc(props.user.uid);

					ref
						.get()
						.then((doc) => {
							if (doc.exists) {
								setUserDetails(doc.data());
							} else {
								// doc.data() will be undefined in this case
								console.log("No such document!");
							}
						})
						.catch((error) => {
							console.log("Error getting document:", error);
						});
					message.success("Airdrop registration successful");
				})
				.catch((error) => {
					console.error("Error writing document: ", error);
				});
		} else {
			message.error(
				"Please complete the checklist and enter twitter and telegram details before submitting"
			);
		}
	};
	const copyToClipBoard = (text) => {
		navigator.clipboard.writeText(text);
		message.success("Referral link copied to clipboard");
	};
	let query = useQuery();
	const twitterHashtags = ["Airdrop", "FananceClub", "DeFi", "Cardano"];
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(0deg, rgb(255,255,255,0.8), rgb(255,255,255,0.6)),url('/blue-bg.jpg')",
				backgroundSize: "auto",
				backgroundPosition: "bottom",
			}}
		>
			<Navbar />
			<img
				src="logo.png"
				style={{ float: "left", width: "100%" }}
				alt="logo"
				className="small-screen-only"
			/>
			<Row
				justify="center"
				align="middle"
				style={{ display: "flexbox", marginTop: "65px" }}
				className="hero-height"
			>
				<Col xs={24} sm={24} md={16} lg={16} xl={16}>
					<div className="title">
						<h1
							style={{
								fontSize: "50px",
								fontWeight: "bold",
								margin: "0px 0px 20px",
							}}
						>
							Sports Player's stocks DEX
						</h1>
						<h4
							style={{
								color: "black",
								textAlign: "center",
							}}
						>
							<s style={{ fontSize: "20px", color: "#263238" }}>
								Stop being a Fantasy Player
							</s>
							<br />
							<span style={{ fontSize: "30px", color: "#263238" }}>
								Start being an Owner
							</span>
							<br />
							<br />
							<span
								style={{
									fontSize: "30px",
									color: "#002c9c",
								}}
							>
								Buy and Sell your Favourite Sports Player’s Stocks
							</span>
							<br />
							<br />
						</h4>
						<Col xs={24} sm={24} md={0}>
							<img
								className="hero-image"
								src="/soccer-hero.png"
								alt="soccer-player"
							/>
						</Col>
						<Button
							type="primary"
							size="large"
							style={{
								backgroundColor: "#18ffff",
								borderColor: "#273238",
								borderRadius: "5px",
								color: "#273238",
								fontWeight: "bold",
							}}
							onClick={showDrawer}
						>
							{props.user ? "DASHBOARD" : "REGISTER"}
						</Button>
						{props.user ? (
							""
						) : (
							<>
								<h5
									style={{
										color: "black",
										textAlign: "center",
									}}
								>
									⚽ Login to avail 20 $FANC Airdrop
									<br />
									🏏 To join Fanance Club Referral Program and
									<br />
									🏀 To get early access to $FANC Token Sale
								</h5>
							</>
						)}
					</div>
				</Col>
				<Col xs={0} sm={0} md={8} lg={8} xl={8}>
					<img
						className="hero-image"
						src="/soccer-hero.png"
						alt="soccer-player"
					/>
				</Col>
			</Row>
			<Drawer
				title=""
				placement="right"
				closable={true}
				onClose={onClose}
				visible={visible}
				drawerStyle={{ backgroundColor: "#273238", color: "white" }}
			>
				{props.user ? (
					<>
						<Title style={{ color: "white", textAlign: "center" }}>
							DASHBOARD
						</Title>
						{userDetails == null ? (
							<>
								<p>Dear {props.user.displayName},</p>
								<p>
									To avail your Joining Bonus of 20 $FANC, complete the below
									tasks:
								</p>
								<Divider orientation="left" style={{ color: "white" }}>
									Twitter
								</Divider>
								1. Follow{" "}
								<a
									href="https://twitter.com/FananceClub"
									target="_blank"
									rel="noreferrer"
								>
									@FananceClub
								</a>{" "}
								on Twitter
								<br />
								<br />
								<TwitterFollowButton
									screenName="FananceClub"
									options={{ size: "large" }}
								/>
								2. Like, Retweet and Tag 3 friends in the below tweet on Twitter
								(Click on the tweet or click this{" "}
								<a
									href="https://twitter.com/FananceClub/status/1406163615313383424"
									target="_blank"
									rel="noreferrer"
								>
									link
								</a>{" "}
								and Retweet)
								<div className="centerContent">
									<div className="selfCenter">
										<TwitterTweetEmbed tweetId="1406163615313383424" />
									</div>
								</div>
								<p>3. Enter your twitter handle below:</p>
								<Input
									placeholder="Twitter handle"
									prefix={<TwitterOutlined />}
									id="twitter"
									value={twitterHandle}
									onChange={setTwitterHandleStatus}
								/>
								<Divider orientation="left" style={{ color: "white" }}>
									Telegram
								</Divider>
								1. Join our Telegram channel for discussions and announcements
								<br />
								<br />
								<a
									href="https://t.me/FananceClubChat"
									target="_blank"
									rel="noreferrer"
								>
									<Button
										type="primary"
										style={{ color: "#273238" }}
										shape="round"
									>
										Follow on Telegram
									</Button>
								</a>
								<p>2. Enter your Telegram username below:</p>
								<Input
									placeholder="Telegram username"
									id="telegram"
									value={telegramHandle}
									onChange={setTelegramHandleStatus}
								/>
								<Divider orientation="left" style={{ color: "white" }}>
									Checklist
								</Divider>
								<Checkbox
									id="twitter1"
									style={{ color: "white" }}
									onChange={setTwitter1State}
								>
									Followed @FananceClub on Twitter
								</Checkbox>
								<br />
								<Checkbox
									id="twitter2"
									style={{ color: "white" }}
									onChange={setTwitter2State}
								>
									Liked, Retweeted and Tagged 3 friends in the above tweet
								</Checkbox>
								<br />
								<Checkbox
									id="telegram1"
									style={{ color: "white" }}
									onChange={setTelegram1State}
								>
									Joined Telegram channel
								</Checkbox>
								<br />
								<br />
								<span style={{ fontSize: "12px" }}>
									* - Please note that your twitter retweet and telegram join
									status will be checked by our backend API at TGE
									<br />
								</span>
								<p style={{ textAlign: "center" }}>
									<Button
										type="primary"
										style={{ color: "#273238" }}
										onClick={() => enrollUser(query.get("referrer"))}
										size="large"
										shape="round"
									>
										Submit Airdrop entry
									</Button>
									<br />
									<br />
									<Button
										type="primary"
										onClick={signOut}
										style={{ color: "#273238" }}
										shape="round"
									>
										Sign Out
									</Button>
								</p>
								<p id="submissionError" style={{ color: "red" }}></p>
							</>
						) : (
							<>
								<p style={{ textAlign: "center" }}>
									<Title level={3} style={{ color: "white" }}>
										Congrats, {props.user.displayName}
									</Title>
									<br />
									<img src="./celebration.png" width="30%" alt="celebration" />
									<Title level={4} style={{ color: "white" }}>
										Your token balance is{" "}
										<b style={{ color: "#18ffff" }}>
											{userDetails.tokenBalance}
										</b>{" "}
										$FANC
									</Title>
									<p>(Can be claimed in September)</p>
									<Title level={5} style={{ color: "white" }}>
										Number of successful referrals -{" "}
										<b style={{ color: "#18ffff" }}>
											{userDetails.referrees.length}
										</b>
									</Title>
								</p>
								<Divider />
								<Title level={4} style={{ color: "white" }}>
									Earn more by referrals !!
								</Title>
								<p>
									For Every Successful referral ( Referral should Signin and
									complete the steps ) you will earn 10 $FANC
								</p>
								<p>To earn more $FANC, share your Referral Link with others:</p>
								<p
									style={{
										borderStyle: "solid",
										padding: "10px",
										borderColor: "#18ffff",
										borderRadius: "10px",
										fontWeight: "bold",
									}}
								>
									https://fanance.club/?referrer={props.user.uid}/
								</p>
								<Button
									type="primary"
									size="small"
									onClick={() =>
										copyToClipBoard(
											`https://fanance.club/?referrer=${props.user.uid}/`
										)
									}
									style={{ color: "#273238" }}
									shape="round"
								>
									Copy to clipboard
								</Button>
								<br />
								<br />
								<Title level={4} style={{ color: "white" }}>
									Share referral link to your network
								</Title>
								<TwitterShareButton
									url={`https://fanance.club/?referrer=${props.user.uid}/`}
									title={
										"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!"
									}
									via={"FananceClub"}
									hashtags={twitterHashtags}
								>
									<TwitterIcon size={40} round={true} />
								</TwitterShareButton>{" "}
								<TelegramShareButton
									url={`https://fanance.club/?referrer=${props.user.uid}/`}
									title={
										"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!"
									}
								>
									<TelegramIcon size={40} round={true} />
								</TelegramShareButton>{" "}
								<RedditShareButton
									url={`https://fanance.club/?referrer=${props.user.uid}/`}
									title={
										"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!"
									}
								>
									<RedditIcon size={40} round={true} />
								</RedditShareButton>{" "}
								<FacebookShareButton
									url={`https://fanance.club/?referrer=${props.user.uid}/`}
									quote="Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!"
									hashtag="#Airdrop #FananceClub #DeFi"
								>
									<FacebookIcon size={40} round={true} />
								</FacebookShareButton>{" "}
								<LinkedinShareButton
									url={`https://fanance.club/?referrer=${props.user.uid}/`}
									title="Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!"
								>
									<LinkedinIcon size={40} round={true} />
								</LinkedinShareButton>{" "}
								<WhatsappShareButton
									url={`https://fanance.club/?referrer=${props.user.uid}/`}
									title={
										"Participate in Fanance Club Airdrop and earn 20 $FANC and more !!!"
									}
								>
									<WhatsappIcon size={40} round={true} />
								</WhatsappShareButton>
								<br />
								<br />
								<Button
									type="primary"
									onClick={signOut}
									style={{ color: "#273238" }}
									shape="round"
								>
									Sign Out
								</Button>
							</>
						)}
					</>
				) : (
					<>
						<Title style={{ color: "white", textAlign: "center" }}>
							AIRDROP
						</Title>
						<p style={{ textAlign: "center" }}>
							<img src="./airdrop.png" width="30%" alt="celebration" />
							<br />
							<br />
							<p style={{ textAlign: "center", fontSize: "20px" }}>
								⚽ Login to avail 20 $FANC Airdrop
								<br />⚽ To join Fanance Club Referral Program and
								<br />⚽ To get early access to $FANC Token Sale
							</p>
							<p style={{ textAlign: "center" }}>
								<Button
									type="primary"
									onClick={onSubmit}
									size="large"
									style={{ color: "#273238" }}
									icon={<GoogleOutlined />}
									shape="round"
								>
									Login with Google
								</Button>
							</p>
						</p>
					</>
				)}
			</Drawer>
		</div>
	);
}

export default Hero;
