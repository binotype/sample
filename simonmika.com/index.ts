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
	keywords: ["simon mika", "blog", "personal", "tech", "programming"],
	author: "Simon Mika",
	design: {
		logotype: "/img/logotype.svg",
		styles: ["css/text.css", "css/color.css", "css/layout.css", "css/form.css", "css/blockquotes.css"],
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
