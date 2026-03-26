import { binotype } from "@binotype/model"
import { design } from "./design"
import { home } from "./home"
import { article } from "./article"

export const site: binotype.Site = {
	url: "https://example.com",
	language: "en-US",
	title: "Sample Blog",
	tagline: "your tagline here",
	description:
		"Sample blog containing articles on various topics.\nArticles convey experiences and insights from professional work.",
	keywords: ["blog", "personal", "tech", "programming"],
	author: "Your Name",
	design: design,
	page: {
		pages: {
			article,
			home,
			talk: {
				title: "Talks",
				pages: {},
			},
			about: {
				title: "About",
				content:
					'<p>I am [Your Name], and I create things. Professionally I create software products.</p>\n<p>I live in [Your City], [Your Country] with my family.</p>\n<p>I write about building software and building companies.</p>\n<p>Currently, I help companies as a consultant. If you are interested in my services please <a href="../contact">contact me</a>.</p>\n<p>You can find out more about me on my page on <a href="#">LinkedIn</a> and on <a href="#">GitHub</a>.</p>',
			},
			contact: {
				title: "Contact",
				menu: false,
				content:
					'<p>Don&apos;t hesitate to contact me with ideas, suggestions and opinions. I look forward to hear from you.</p>\n<form action="#" method="post">\n<input type="hidden" name="redirect_to" value="#" />\n<label for="name">Name</label>\n<input type="text" name="name" />\n<label for="email">Email</label>\n<input type="email" name="email" />\n<label for="message">Message</label>\n<textarea name="message"></textarea>\n<button type="submit">Send</button>\n</form>',
			},
			description: {
				title: "Description",
				menu: false,
				content:
					"<p>Sample blog contains articles on subjects such as <em>software development</em>, <em>technology</em> and <em>professional topics</em>.</p>\n<p>The articles convey <em>experiences and insights</em> from professional work.</p>",
			},
			subscribe: {
				title: "Subscribe",
				menu: false,
				content: "<p>Subscribe to receive updates when new content is published.</p>",
			},
		},
	},
}
