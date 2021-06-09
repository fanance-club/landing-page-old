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
import React, { useState } from "react";
import "./hero.css";
import Sidebar from "./Drawer";
import { useLocation } from "react-router-dom";
import { TwitterOutlined } from "@ant-design/icons";
import firebase from "./firebase";
import {
	TwitterTweetEmbed,
	TwitterShareButton,
	TwitterFollowButton,
} from "react-twitter-embed";
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
				console.log("Signed Out");
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
								.doc(props.user.uid)
								.set(
									{
										referrees: [...doc.referrees, props.user.uid],
										tokenBalance: doc.tokenBalance + 20,
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
	let query = useQuery();
	console.log(props.user);
	return (
		<div className="hero">
			<Row justify="space-around" align="middle">
				<Col xs={24} sm={24} md={16} lg={16} xl={16}>
					<div className="title">
						<img src="/logo.png" width="70%" className="hero-logo" />
						<h2
							className="hero-sub-title"
							style={{ color: "white", textShadow: "0px 0px 3px black" }}
						>
							Finance for Fans
						</h2>
						<h2
							style={{
								color: "white",
								fontWeight: "bold",
								textShadow: "1px 1px 5px #263238",
								textAlign: "center",
							}}
							className="hero-text"
						>
							Your knowledge and passion towards your favourite sports players
							is gonna make you Money from now on!!!
						</h2>
						<Button
							type="primary"
							size="large"
							style={{
								backgroundColor: "#273238",
								borderColor: "#18ffff",
								borderRadius: "5px",
								color: "#18ffff",
								fontWeight: "bold",
							}}
							onClick={showDrawer}
						>
							{props.user ? "DASHBOARD" : "AIRDROP"}
						</Button>
					</div>
				</Col>
				<Col xs={24} sm={24} md={8} lg={8} xl={8}>
					<img className="hero-image" src="/soccer-hero.png" />
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
						<p>Dear {props.user.displayName},</p>
						<p>
							To avail your Joining Bonus of 20 $FANC, complete the below tasks:
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
						2. Retweet the below tweet on Twitter (Click on the tweet or click
						this{" "}
						<a
							href="https://twitter.com/FananceClub/status/1400443616145801219"
							target="_blank"
							rel="noreferrer"
						>
							link
						</a>{" "}
						and Retweet)
						<div className="centerContent">
							<div className="selfCenter">
								<TwitterTweetEmbed tweetId="1400443616145801219" />
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
							<Button type="primary" style={{ color: "#273238" }}>
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
							Retweeted the above tweet
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
							* - Please note that your twitter retweet and telegram join status
							will be checked by our backend API at TGE
							<br />
						</span>
						<Button
							type="primary"
							style={{ color: "#273238" }}
							onClick={() => enrollUser(query.get("referrer"))}
							size="large"
						>
							Submit Airdrop entry
						</Button>
						<p id="submissionError" style={{ color: "red" }}></p>
						<p>You have earned 10 $FANC Tokens!</p>
						<p>
							For Every Successful referral ( Referral should Signin and
							complete the retweet step ) you will earn 10 $FANC
						</p>
						<p>To earn more $FANC, share your Referral Link with others:</p>
						<p>https://fanance.club/invite/sathd6b1ba</p>
						<p>Social Sharing icons</p>
						<Button
							type="primary"
							onClick={signOut}
							style={{ color: "#273238" }}
						>
							Sign Out
						</Button>
					</>
				) : (
					<>
						<Title style={{ color: "white", textAlign: "center" }}>
							AIRDROP
						</Title>
						<p style={{ marginTop: "30vh" }}>
							<p>
								Login to avail 20 $FANC Airdrop, to join Fanance Club Referral
								Program and get early access to $FANC Token Sale
							</p>
							<p style={{ textAlign: "center" }}>
								<Button
									type="primary"
									onClick={onSubmit}
									size="large"
									style={{ color: "#273238" }}
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
