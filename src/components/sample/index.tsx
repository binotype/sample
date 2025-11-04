import { Component, h } from "@stencil/core"
import { site } from "../../../simonmika.com"
import { Page } from "../Page"

@Component({
	tag: "binotype-sample",
	styleUrl: "style.css",
})
export class BinotypeSample {
	render() {
		return <Page site={site}></Page>
	}
}
