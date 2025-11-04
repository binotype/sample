import { FunctionalComponent, h } from "@stencil/core"

export const Footer: FunctionalComponent<Footer.Properties> = ({ footer }) => footer && <p>{footer}</p>
export namespace Footer {
	export interface Properties {
		footer?: string
	}
}
