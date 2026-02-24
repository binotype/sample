import { Component, h, Prop } from "@stencil/core"
@Component({
	tag: "app-profile",
	styleUrl: "app-profile.css",
	shadow: true,
})
export class AppProfile {
	@Prop() name: string

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
					<p>Hello! My name is {this.normalize(this.name)}. My name was passed in through a route param!</p>
					<smoothly-input type="text" value={this.name}>
						<smoothly-label>Name</smoothly-label>
					</smoothly-input>
				</div>
			)
		}
	}
}
