import { PrerenderConfig } from "@stencil/core"

export const config: PrerenderConfig = {
	entryUrls: ["/", "/about"],
	crawlUrls: true,
	hydrateOptions(url) {
		return {
			prettyHtml: true,
		}
	},
}
