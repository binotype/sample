import { FunctionalComponent, h } from "@stencil/core"

export const Single: FunctionalComponent<Single.Properties> = ({ summary }) => (
	<main class="summary">
		<p>{summary}</p>
	</main>
)
export namespace Single {
	export interface Properties {
		summary: string
	}
}
