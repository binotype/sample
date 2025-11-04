import { isoly } from "isoly"
import { Section } from "../Section"

export interface Page {
	weight?: number
	title?: string
	date?: isoly.Date
	tags?: string[]
	draft?: boolean
	content?: string | Record<string, Section>
	pages?: Record<string, Page>
}
export namespace Page {
	export function locate(page: Page, path: string[]): Page | undefined {
		return path.length == 0 ? page : page.pages ? locate(page.pages[path[0]], path.slice(1)) : undefined
	}
	export function getTitle(page: Page): string {
		return page.title ?? "untitled"
	}
}
