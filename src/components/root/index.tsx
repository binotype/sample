import { Component, h, Host } from "@stencil/core"
import { site } from "../../../index"
import * as binotype from "../binotype"
import { Footer } from "../Footer"

binotype.Footer.override = Footer
@Component({
	tag: "website-root",
	styleUrl: "style.css",
})
export class WebsiteRoot {
	render() {
		return (
			<Host>
				<binotype-site site={site}></binotype-site>
			</Host>
		)
	}
}
