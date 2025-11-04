import { isoly } from "isoly"

export interface Content {
	mode: "body" | "full" | "header" | "list" | "summary"
	id: string
	title: string
	summary: string
	image?: string
	published?: isoly.Date
	changed?: isoly.Date
	wordCount?: number
	readingTime?: number
	author?: string
	publication?: string
	main: string | Content[]
}
export namespace Content {}
