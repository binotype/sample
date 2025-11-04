import { isoly } from "isoly"

export interface Header {
	title: string
	published?: isoly.Date
	changed?: isoly.Date
	wordCount?: number
	readingTime?: number
	author?: string
	publication?: string
}
export namespace Header {}
