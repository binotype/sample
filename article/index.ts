import { binotype } from "@binotype/model"
import { samplePost } from "./sample-post"
import { anotherSample } from "./another-sample"
import { draftPost } from "./draft-post"

export const article: binotype.Site.Page = {
	title: "Articles",
	pages: {
		samplePost,
		anotherSample,
		draftPost,
	},
}
