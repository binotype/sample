import { FunctionalComponent, h } from "@stencil/core"

export const Navigation: FunctionalComponent<Navigation.Properties> = ({ summary }) => (
	<main class="summary">
		<p>{summary}</p>
	</main>
)
export namespace Navigation {
	export interface Properties {
		summary: string
	}
}
