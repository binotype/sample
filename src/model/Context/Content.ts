import { isoly } from "isoly"

export interface Content {
	id: string
	mode: "body" | "full" | "header" | "list" | "summary"
	title: string
	summary: string
	image?: string
	published?: isoly.Date
	changed?: isoly.Date
	wordCount?: number
	readingTime?: number
	author?: string
	publication?: string
	content: string | Content[]
}
export namespace Content {}
