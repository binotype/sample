import { FunctionalComponent, h } from "@stencil/core"

export const Header: FunctionalComponent<Header.Properties> = ({ base, logotype, title, tagline }, children) => (
	<header>
		<h1>
			<a href={base}>{logotype ? <img src={logotype} alt={`${title}${tagline ? ` · ${tagline}` : ""}`} /> : title}</a>
		</h1>
		{tagline && <p>{tagline}</p>}
		{children}
	</header>
)
export namespace Header {
	export interface Properties {
		base: string
		logotype?: string
		title: string
		tagline?: string
	}
}
