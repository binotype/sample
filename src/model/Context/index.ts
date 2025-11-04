import { Site } from "../Site"
import { Content as _Content } from "./Content"
import { Header as _Header } from "./Header"
import { Menu as _Menu } from "./Menu"

export interface Context {
	title: string
	base: string
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
		const page = (path.startsWith("/") && Site.Page.locate(site.page, path.substring(1).split("/"))) || {
			title: "Not Found",
			content: "The requested page was not found.",
		}
		return {
			title: `${site.title} · ${page?.title ?? ""}`,
			base: site.url,
			url: site.url + path,
			menu: Menu.load(site, path.substring(1)),
			content: {
				mode: "full",
				id: path.substring(path.lastIndexOf("/") + 1),
				title: Site.Page.getTitle(page),
				summary: page.content ? String(page.content).slice(0, 200) : "",
				main: String(page.content ?? ""),
			},
			footer: `Copyright © ${new Date().getFullYear()} ${site.title}, All rights reserved`,
		}
	}
}
