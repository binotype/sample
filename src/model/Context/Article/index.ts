import { Site } from "../../Site"
import { Header } from "./Header"

export interface Article {
	mode: "body" | "full" | "header" | "list" | "summary"
	id: string
	header?: Header
	image?: string
	summary?: string
	content?: string
	sections?: Article[]
}
export namespace Article {
	export function load(page: Site.Page, id: string): Article {
		return {
			mode: "full",
			id,
			header: {
				title: Site.Page.getTitle(page),
			},
			content: String(page.content || ""),
			// summary: page.content ? String(page.content).slice(0, 200) : "",
		}
	}
}
