import { Fragment, FunctionalComponent, h } from "@stencil/core"
import { model } from "../model"
import { Footer } from "./Footer"
import { Head } from "./Head"
import { Header } from "./Header"
import { Navigation } from "./Navigation"
import { List } from "./List"
import { Single } from "./Single"

export const Page: FunctionalComponent<Page.Properties> = ({ site }) => {
	console.log("Rendering Page component with site:", site)
	const context = model.Context.load(site, window.location.pathname)
	console.log("Rendering Page component with context:", context)
	const navigation = <Navigation {...context.menu} />
	return (
		<Fragment>
			<Head {...context}></Head>
			<Header logotype={context.design?.logotype} {...context}>
				{site.design.navigation == "header" ? navigation : undefined}
			</Header>
			{site.design.navigation != "header" ? navigation : undefined}
			{Array.isArray(context.article.sections) ? (
				<List article={context.article} />
			) : (
				<Single article={context.article} />
			)}
			<Footer {...context} />
		</Fragment>
	)
}

export namespace Page {
	export interface Properties {
		site: model.Site
	}
}
