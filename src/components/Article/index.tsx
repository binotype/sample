import { FunctionalComponent, h } from "@stencil/core"
import { SelfLink } from "../SelfLink"
import { Part } from "./Part"

export const Article: FunctionalComponent<Article.Properties> = ({
	id,
	mode,
	header,
	summary,
	link,
	truncated,
	aside,
	content,
	sections,
	footer,
}) => (
	<article id={id} class={`mode-${mode}`}>
		{header && <Part.Header {...header} />}
		{aside && <Part.Aside {...aside} />}
		{content && <Part.Content content={content} />}
		{sections && sections.map(section => <Article {...section} />)}
		{footer && <Part.Footer {...footer} />}
		{summary && <Part.Summary summary={summary} />}
		{link && <SelfLink link={link} truncated={truncated}></SelfLink>}
	</article>
)
export namespace Article {
	export interface Properties extends Partial<Part.Summary.Properties>, SelfLink.Properties {
		id: string
		mode: "body" | "full" | "header" | "list" | "summary"
		header?: Part.Header.Properties
		aside?: Part.Aside.Properties
		content?: string
		sections?: Properties[]
		footer?: Part.Footer.Properties
	}
}
