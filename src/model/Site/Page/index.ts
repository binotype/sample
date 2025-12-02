import { isoly } from "isoly"
import { dom } from "@typeup/dom"
import { parser } from "@typeup/parser"
import { renderer } from "@typeup/renderer"
import { mendly } from "mendly"
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
	export async function parse(raw: string): Promise<Page | undefined> {
		const document: dom.Document | undefined = parser.parse(
			mendly.Reader.String.create(raw),
			new mendly.Error.Handler.Console()
		)
		const rendered = document && (await renderer.render(document))
		const assignments = Object.fromEntries(
			document?.content
				.filter((node): node is dom.Block.Assignment => node.class == "assignment")
				.map(assignment => [assignment.name, assignment.value]) ?? []
		)
		return (
			document && {
				weight: assignments.weight ? Number(assignments.weight) : undefined,
				title: assignments.title,
				menu: assignments.menu == "false" ? false : undefined,
				date: isoly.Date.is(assignments.date) ? assignments.date : undefined,
				tags: assignments.tags
					? String(assignments.tags)
							.split(",")
							.map(tag => tag.trim())
					: undefined,
				draft: assignments.draft == "true" ? true : undefined,
				content: rendered ?? raw,
			}
		)
	}
}
