import { FunctionalComponent, h } from "@stencil/core"
import * as binotype from "./binotype"

export const Footer: FunctionalComponent<binotype.Footer.Properties> = ({ context }) => (
	<footer>
		<binotype.Navigation {...context.menu} depth={1} />
		<main>
			{context.path.empty ? (
				<binotype.Article {...context.load("/description", "body")!}></binotype.Article>
			) : (
				<binotype.Article {...context.load(context.design.home?.section ?? "", "list", 5)!}></binotype.Article>
			)}
		</main>
	</footer>
)
export namespace Footer {}
