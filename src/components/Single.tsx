import { FunctionalComponent, h } from "@stencil/core"
import { Article } from "./Article"
import { model } from "../model"

export const Single: FunctionalComponent<Single.Properties> = ({ article }) => (
	<main class="single">
		<Article {...article} />
	</main>
)
export namespace Single {
	export interface Properties {
		article: model.Context.Article
	}
}
