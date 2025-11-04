import { model } from "../src/model"
import { about } from "./about"
import { articles } from "./articles"
import { contact } from "./contact"
import { description } from "./description"
import { subscribe } from "./subscribe"
import { talks } from "./talks"

export const site: model.Site = {
	url: "https://simonmika.com",
	language: "en-US",
	title: "Simon Says",
	tagline: "truths, opinions and preconceptions",
	description:
		"Simon says contains opinionated articles on subjects such as software development, software startups and engineering recruitment.\nThe articles convey lessons learned during work as software engineer, engineering manager and a consultant.",
	keywords: ["simon mika", "blog", "personal", "tech", "programming"],
	author: "Simon Mika",
	design: {
		logotype: "/assets/img/logotype.svg",
		icon: "/assets/icon/favicon.ico",
		styles: [
			"/assets/css/reset.css",
			"/assets/css/text.css",
			"/assets/css/color.css",
			"/assets/css/layout.css",
			"/assets/css/form.css",
			"/assets/css/blockquotes.css",
			"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/default.min.css",
		],
		scripts: ["//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js"],
		navigation: "header",
		list: {
			mode: "header",
		},
		home: {
			mode: "header",
			section: "article",
		},
	},
	page: {
		pages: {
			articles,
			talks,
			about,
			contact,
			description,
			subscribe,
		},
	},
}
