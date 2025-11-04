import { isoly } from "isoly"
import { Section } from "../Section"

export interface Page {
	weight?: number
	title?: string
	menu?: false
	date?: isoly.Date
	tags?: string[]
	draft?: boolean
	content?: string | Record<string, Section>
	pages?: Record<string, Page>
}
export namespace Page {
	export function locate(page: Page | undefined, path: string[]): Page | undefined {
		return path.length == 0 ? page : page?.pages ? locate(page.pages[path[0]], path.slice(1)) : undefined
	}
	export function getTitle(page: Page): string {
		return page.title ?? "(untitled)"
	}
	export function getId(id: string): string {
		return (
			id
				.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
				.toLowerCase()
				.normalize("NFKD")
				.replace(/[\u0300-\u036f]/g, "")
				.replace(/[^a-z0-9-]+/g, "-")
				.replace(/-+/g, "-")
				.replace(/^-+|-+$/g, "") ?? "untitled"
		)
	}
}
