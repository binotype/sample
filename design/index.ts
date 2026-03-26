import { binotype } from "@binotype/model"

export const design: binotype.Site.Design = {
	logotype: "/assets/img/logotype.svg",
	icon: "/assets/icon/favicon.ico",
	styles: ["/assets/css/reset.css", "/assets/css/local-style.css"],
	scripts: ["/assets/js/local-script.js"],
	navigation: "header",
	list: {
		mode: "header",
	},
	home: {
		mode: "header",
		section: "article",
	},
}
