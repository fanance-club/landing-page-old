import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Drawer, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import firebase from "./firebase";

const Sidebar = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const { referrer } = useParams();
	const onSubmit = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				// ...
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Drawer
				title="Dashboard"
				placement="right"
				closable={true}
				onClose={onClose}
				visible={visible}
			>
				<Button type="primary" onClick={onSubmit}>
					Dashboard
				</Button>
				{referrer}
				<p>
					Signup to avail 10 $FANC, to join Fanance Club Referral Program and
					get early access to $FANC Token Sale
				</p>
				<p>
					We will send you information about how to earn rewards in Fanance
					Club’s Referral Program and participate in FANC Token Sale via email.
				</p>
				<p>Dear {"First Name"}, congrats !</p>
				<p>
					To avail your Joining Bonus of 10 $FANC, Retweet this tweet and share
					your retweet link here:
				</p>
				<p>Share retweet link:</p>
				<Input
					size="large"
					placeholder="Retweet Link"
					prefix={<UserOutlined />}
				/>
				<p>
					In addition, to earn a Bonus of 5 $FANC, Join this telegram group and
					share link here: (optional)
				</p>
				<p>Share telegram link:</p>
				<Input
					size="large"
					placeholder="Telegram Link"
					prefix={<UserOutlined />}
				/>
				<p>You have earned 10 $FANC Tokens!</p>
				<p>
					For Every Successful referral ( Referral should Signin and complete
					the retweet step ) you will earn 10 $FANC
				</p>
				<p>To earn more $FANC, share your Referral Link with others:</p>
				<p>https://fanance.club/invite/sathd6b1ba</p>
				<p>Social Sharing icons</p>
			</Drawer>
		</>
	);
};

export default Sidebar;
