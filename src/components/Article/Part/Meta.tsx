import { FunctionalComponent, h } from "@stencil/core"
import { isoly } from "isoly"

export const Meta: FunctionalComponent<Meta.Properties> = ({
	published,
	changed,
	wordCount,
	readingTime,
	author,
	publication,
}) => (
	<p>
		{published && <time class="article-published">{published}</time>}
		{changed && <time class="article-changed">{changed}</time>}
		{wordCount && <span class="article-word-count">{wordCount}</span>}
		{readingTime && <span class="article-reading-time">{readingTime}</span>}
		{author && <span class="article-author">{author}</span>}
		{publication && <span class="article-publication">{publication}</span>}
	</p>
)
export namespace Meta {
	export interface Properties {
		published?: isoly.Date
		changed?: isoly.Date
		wordCount?: number
		readingTime?: number
		author?: string
		publication?: string
	}
}
