import { binotype } from "@binotype/model"
import { section1 } from "./section1"
import { section2 } from "./section2"

export const home: binotype.Site.Page = {
	title: "Home",
	content: {
		section1,
		section2,
	},
}
