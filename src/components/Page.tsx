import { Fragment, FunctionalComponent, h } from "@stencil/core"
import { model } from "../model"
import { Article } from "./Article"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Page: FunctionalComponent<Page.Properties> = ({ site }) => {
	console.log("Rendering Page component with site:", site)
	const context = model.Context.load(site, window.location.pathname)
	return (
		<Fragment>
			<Header {...context} />
			<Article {...context.content} />
			<Footer {...context} />
		</Fragment>
	)
}

export namespace Page {
	export interface Properties {
		site: model.Site
	}
}
