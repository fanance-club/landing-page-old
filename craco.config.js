const CracoLessPlugin = require("craco-less");

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#18FFFF",
							"@text-color": "black",
							"@divider-color": "white",
							"@font-family": `Rajdhani, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
							'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
							'Noto Color Emoji'`,
							"@font-size-base": "14px",
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
