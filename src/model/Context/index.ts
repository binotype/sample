import { Site } from "../Site"
import { Content as _Content } from "./Content"
import { Header as _Header } from "./Header"
import { Menu as _Menu } from "./Menu"

export interface Context {
	title: string
	url: string
	menu: Context.Menu
	content: Context.Content
	footer: string
}
export namespace Context {
	export import Content = _Content
	export import Header = _Header
	export import Menu = _Menu
	export function load(site: Site, path: string): Context {
		const page = Site.Page.locate(site.page, path.split("/")) ?? {
			title: "Not Found",
			content: "The requested page was not found.",
		}
		return {
			title: `${site.title} · ${page?.title ?? ""}`,
			url: site.url,
			menu: Menu.load(site, path),
			content: {
				id: path,
				mode: "full",
				title: page?.title ?? "(untitled)",
				summary: page.content ? String(page.content).slice(0, 200) : "" + "...",
				content: String(page.content ?? ""),
			},
			footer: `Copyright © ${new Date().getFullYear()} ${site.title}, All rights reserved`,
		}
	}
}
