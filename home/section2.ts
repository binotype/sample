import { binotype } from "@binotype/model"
import showdown from "showdown"

export const section2: binotype.Site.Page.Section = {
	title: "Latest Articles",
	weight: 1,
	content: new showdown.Converter().makeHtml(`
		Check out the latest articles below:

		- [Sample Post](/article/sample-post)
		- [Another Sample Post](/article/another-sample)
	`),
}
