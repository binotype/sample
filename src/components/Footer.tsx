import { FunctionalComponent, h } from "@stencil/core"

export const Footer: FunctionalComponent<Footer.Properties> = ({ footer }) =>
	footer && (
		<footer>
			<p>{footer}</p>
		</footer>
	)
export namespace Footer {
	export interface Properties {
		footer?: string
	}
}
