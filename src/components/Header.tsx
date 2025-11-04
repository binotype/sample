import { FunctionalComponent, h } from "@stencil/core"

export const Header: FunctionalComponent<Header.Properties> = ({ url, logotype, title, tagline }) => (
	<header>
		<h1>
			<a href={url}>{logotype ? <img src={logotype} alt={`${title}${tagline ? ` · ${tagline}` : ""}`} /> : title}</a>
		</h1>
		{tagline && <p>{tagline}</p>}
	</header>
)
export namespace Header {
	export interface Properties {
		url: string
		logotype?: string
		title: string
		tagline?: string
	}
}
