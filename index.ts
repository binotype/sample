import { model } from "./src/model"

export const site: model.Site = {
	url: "https://example.com",
	language: "en-US",
	title: "Example Site",
	tagline: "An example site using Binotype",
	description: "This is an example site created with Binotype.",
	keywords: ["example", "binotype", "site"],
	author: "John Doe",
	design: {
		logotype: "https://example.com/logo.png",
		navigation: "header",
		styles: ["style.css"],
		list: {
			mode: "header",
		},
		home: {
			mode: "header",
			section: "article",
		},
	},
	page: {
		title: "Home",
		content: "Welcome to the home page.",
	},
}
