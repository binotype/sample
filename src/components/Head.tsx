import { FunctionalComponent, h } from "@stencil/core"

export const Head: FunctionalComponent<Head.Properties> = ({ title }) => (
	<head>
		<title>{title}</title>
	</head>
)
export namespace Head {
	export interface Properties {
		title: string
	}
}
