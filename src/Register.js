import React from "react";
import {
	Form,
	Input,
	Button,
	notification,
	Card,
	Row,
	Col,
	Typography,
} from "antd";
import { MediumOutlined, TwitterOutlined, LikeFilled } from "@ant-design/icons";
const { Title } = Typography;
// import querystring from "querystring";
// import https from "https";
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 8,
	},
};

class Register extends React.Component {
	formRef = React.createRef();
	onSubmit = () => {
		const value = document.getElementById("email").value;
		// var post_data = querystring.stringify({
		// 	username: "fanance.club@gmail.com",
		// 	api_key:
		// 		"E4C0AD6BBEEB6A156FF8D6DEF4E8B72CC9C456876DF1CA4F5FF443A3BED4884AB1E875AB4E09D7ECE9B42AFDBDC4B5F8",
		// 	from: "fanance.club@gmail.com",
		// 	from_name: "Fanance Club",
		// 	to: "fanance.club@gmail.com",
		// 	subject: `New Registration - ${value}`,
		// 	body_html: `<b><u>New Customer Registration:</u></b><br /> Mail id: ${value}<br /> `,
		// 	body_text: "",
		// });

		// // Object of options.
		// var post_options = {
		// 	host: "api.elasticemail.com",
		// 	path: "/mailer/send",
		// 	port: "443",
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/x-www-form-urlencoded",
		// 		"Content-Length": post_data.length,
		// 	},
		// };
		// var result = "";
		// // Create the request object.
		// var post_req = https.request(post_options, function (res) {
		// 	res.setEncoding("utf8");
		// 	res.on("data", function (chunk) {
		// 		result = chunk;
		// 	});
		// 	res.on("error", function (e) {
		// 		result = "Error: " + e.message;
		// 	});
		// });

		// // Post to Elastic Email
		// post_req.write(post_data);
		// post_req.end();
		//Google Sheets Integration
		const scriptUrl =
			"https://script.google.com/macros/s/AKfycbyAAtIrUMI6z5lTR6GqgGn0_9xTktPGmKrSzL9PnLZlWD9XE7to/exec";
		const url = `${scriptUrl}?callback=ctrlq&email=${value}`;
		fetch(url, { mode: "no-cors" }).then(
			() => {
				notification.open({
					message: "Thank you for your registration",
					description: `You will be notified when we go LIVE on your mail id: "${value}"`,
					icon: <LikeFilled style={{ color: "#00B8D4" }} />,
					className: "notification-color",
				});
			},
			() => {
				console.log("Error: true");
			}
		);
		this.formRef.current.resetFields();
	};

	render() {
		return (
			<div style={{ textAlign: "center" }} id="register" className="radialbg">
				<Title style={{ color: "white", padding: "20px 0 20px 0" }}>
					Get Early Access
				</Title>
				<p style={{ color: "white" }}>
					You will get exclusive access to beta and main net once we are live
				</p>
				<Form
					{...layout}
					ref={this.formRef}
					name="control-ref"
					onFinish={this.onSubmit}
					style={{ padding: "0 10% 25px 10%" }}
				>
					<Form.Item
						name="email"
						label="Email"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input id="email" />
					</Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						style={{ color: "black" }}
						onClick="onSubmit()"
					>
						Submit
					</Button>
				</Form>
				<Title style={{ color: "#263238" }}>Follow us on Social Media</Title>
				<Row justify="center">
					<Col xs={18} sm={6} md={8} lg={6} xl={4} style={{ padding: "20px" }}>
						<a
							href="https://twitter.com/FananceClub"
							target="_blank"
							rel="noreferrer"
						>
							<Card
								bordered={false}
								style={{ borderRadius: "12px", width: "100%", backgroundColor:"#263238" }}
							>
								<TwitterOutlined
									style={{
										fontSize: "50px",
										color: "#18ffff",
										padding: "0 10px 25px 10px",
									}}
								/>
								<br></br>
								<b>Twitter</b>
								<br></br>
								<span style={{ fontSize: "12px" }}>
									Follow <b>@FananceClub</b> for news and updates
								</span>
							</Card>
						</a>
					</Col>
					<Col xs={18} sm={6} md={8} lg={6} xl={4} style={{ padding: "20px" }}>
						<a
							href="https://medium.com/@fanance.club"
							target="_blank"
							rel="noreferrer"
						>
							<Card
								bordered={false}
								style={{ borderRadius: "12px", width: "100%", backgroundColor:"#263238"  }}
							>
								<MediumOutlined
									style={{
										fontSize: "50px",
										color: "#18ffff",
										padding: "0 10px 25px 10px",
									}}
								/>
								<br></br>
								<b>Medium</b>
								<br></br>
								<span style={{ fontSize: "12px" }}>
									Follow <b>@fanance.club</b> for news and updates
								</span>
							</Card>
						</a>
					</Col>
					<Col xs={18} sm={6} md={8} lg={6} xl={4} style={{ padding: "20px" }}>
						<a href="https://t.me/FananceClub" target="_blank" rel="noreferrer">
							<Card
								bordered={false}
								style={{ borderRadius: "12px", width: "100%", backgroundColor:"#263238"  }}
							>
								<i
									className="fab fa-telegram"
									style={{
										fontSize: "50px",
										color: "#18ffff",
										padding: "0 10px 25px 10px",
									}}
								></i>
								<br></br>
								<b>Telegram</b>
								<br></br>
								<span style={{ fontSize: "12px" }}>
									Follow <b>@FananceClub</b> for community news and chat
								</span>
							</Card>
						</a>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Register;
