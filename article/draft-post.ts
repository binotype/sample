import { binotype } from "@binotype/model"

export const draftPost: binotype.Site.Page = {
	draft: true,
	tags: ["draft"],
	title: "Draft Post",
	content: "<p>This is a draft post placeholder.</p>",
}
