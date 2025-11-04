import { FunctionalComponent, h } from "@stencil/core"

export const List: FunctionalComponent<List.Properties> = ({ summary }) => (
	<main class="summary">
		<p>{summary}</p>
	</main>
)
export namespace List {
	export interface Properties {
		summary: string
	}
}
