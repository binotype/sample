import { PrerenderConfig } from "@stencil/core"

export const config: PrerenderConfig = {
	entryUrls: ["/", "/about", "/404"],
	crawlUrls: true,
	hydrateOptions(url) {
		return {
			prettyHtml: true,
		}
	},
}
