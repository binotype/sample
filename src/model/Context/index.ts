import { Site } from "../Site"
import { Article as _Article } from "./Article"
import { Header as _Header } from "./Header"
import { Menu as _Menu } from "./Menu"

export interface Context {
	title: string
	tagline?: string
	image?: string
	description?: string
	design?: Site.Design
	base: string
	url: string
	menu: Context.Menu
	article: Context.Article
	footer: string
}
export namespace Context {
	export import Article = _Article
	export import Header = _Header
	export import Menu = _Menu
	export function load(site: Site, path: string): Context {
		const page = (path.startsWith("/") && Site.Page.locate(site.page, path.substring(1).split("/"))) || {
			title: "Not Found",
			content: "The requested page was not found.",
		}
		return {
			title: site.title, // `${site.title} · ${page?.title ?? ""}`,
			base: site.url,
			url: site.url + path,
			menu: Menu.load(site, path.substring(1)),
			design: site.design,
			article: Article.load(page!, path.substring(path.lastIndexOf("/") + 1)),
			footer: `Copyright © ${new Date().getFullYear()} ${site.title}, All rights reserved`,
		}
	}
}
