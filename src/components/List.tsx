import { FunctionalComponent, h } from "@stencil/core"
import { Article } from "./Article"
import { model } from "../model"

export const List: FunctionalComponent<List.Properties> = ({ article }) => (
	<main class="list">
		<Article {...article} />
	</main>
)
export namespace List {
	export interface Properties {
		article: model.Context.Article
	}
}
