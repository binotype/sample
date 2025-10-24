import { PrerenderConfig } from "@stencil/core"

export const config: PrerenderConfig = {
	entryUrls: ["/", "/profile/stencil"],
	crawlUrls: true,
	hydrateOptions(url) {
		return {
			prettyHtml: true,
		}
	},
}
