import React from "react";
import { Form, Input, Button, notification } from "antd";
import {
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
	LinkedinOutlined,
	LikeFilled,
} from "@ant-design/icons";
import querystring from "querystring";
import https from "https";
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
		var post_data = querystring.stringify({
			username: "fanance.club@gmail.com",
			api_key:
				"E4C0AD6BBEEB6A156FF8D6DEF4E8B72CC9C456876DF1CA4F5FF443A3BED4884AB1E875AB4E09D7ECE9B42AFDBDC4B5F8",
			from: "fanance.club@gmail.com",
			from_name: "Fanance Club",
			to: "fanance.club@gmail.com",
			subject: `New Registration - ${value}`,
			body_html: `<b><u>New Customer Registration:</u></b><br /> Mail id: ${value}<br /> `,
			body_text: "",
		});

		// Object of options.
		var post_options = {
			host: "api.elasticemail.com",
			path: "/mailer/send",
			port: "443",
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": post_data.length,
			},
		};
		var result = "";
		// Create the request object.
		var post_req = https.request(post_options, function (res) {
			res.setEncoding("utf8");
			res.on("data", function (chunk) {
				result = chunk;
			});
			res.on("error", function (e) {
				result = "Error: " + e.message;
			});
		});

		// Post to Elastic Email
		// post_req.write(post_data);
		post_req.end();
		this.formRef.current.resetFields();
		notification.open({
			message: "Thank you for your registration",
			description: `You will be notified when we go LIVE on your mail id: "${value}"`,
			icon: <LikeFilled style={{ color: "#00B8D4" }} />,
			className: "notification-color",
		});
		return result;
	};

	render() {
		return (
			<div style={{ "text-align": "center" }}>
				<h1 style={{ color: "white", padding: "25px 25px" }}>
					Register with us
				</h1>
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
						onclick="onSubmit()"
					>
						Submit
					</Button>
				</Form>
				<h1 style={{ color: "white" }}>Follow us on Social Media</h1>
				<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
					<FacebookOutlined
						style={{
							"font-size": "50px",
							color: "#18ffff",
							padding: "0 10px 25px 10px",
						}}
					/>
				</a>
				<a href="https://www.twitter.com" target="_blank" rel="noreferrer">
					<TwitterOutlined
						style={{
							"font-size": "50px",
							color: "#18ffff",
							padding: "0 10px 25px 10px",
						}}
					/>
				</a>
				<a href="https://www.instagram.com" target="_blank" rel="noreferrer">
					<InstagramOutlined
						style={{
							"font-size": "50px",
							color: "#18ffff",
							padding: "0 10px 25px 10px",
						}}
					/>
				</a>
				<a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
					<LinkedinOutlined
						style={{
							"font-size": "50px",
							color: "#18ffff",
							padding: "0 10px 25px 10px",
						}}
					/>
				</a>
			</div>
		);
	}
}

export default Register;
