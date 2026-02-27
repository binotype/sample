import { Component, h, Prop } from "@stencil/core"
import { isly } from "isly"
import { defineCustomElements } from "@binotype/site/loader"
import type { binotype } from "@binotype/site"

// Define all components once in your app root
defineCustomElements()
@Component({
	tag: "app-profile",
	styleUrl: "app-profile.css",
	shadow: true,
})
export class AppProfile {
	@Prop() name: string
	private site: binotype.Site = {
		name: "Sample Site",
		t: 42,
	}
	normalize(name: string): string {
		if (name) {
			return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()
		}
		return ""
	}

	render() {
		if (this.name) {
			return (
				<div class="app-profile">
					<p>
						Hello! My name is {this.normalize(this.name)} {globalThis.Number.isInteger(1337).toString()}. My name was
						passed in through a route param!
					</p>
					<code>
						<pre>{globalThis.JSON.stringify(isly.number("value", 1337).is(1337), null, 2)}</pre>
					</code>
					<smoothly-input type="text" value={this.name}>
						<smoothly-label>Name</smoothly-label>
					</smoothly-input>
					<binotype-site site={this.site}>test</binotype-site>
				</div>
			)
		}
	}
}
