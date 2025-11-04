import { Component, h } from "@stencil/core"
import { Page } from "../Page"

@Component({
	tag: "binotype-sample",
	styleUrl: "style.css",
})
export class BinotypeSample {
	render() {
		return (
			<Page
				site={{
					url: "https://example.com",
					language: "en-US",
					title: "Title",
					tagline: "Tagline",
					description: "Description",
					keywords: "keyword1, keyword2",
					author: "Author Name",
					design: {
						styles: ["https://example.com/style.css"],
					},
					page: {
						title: "Page Title",
						content:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.\n\nProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.\n\nNulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
					},
				}}></Page>
		)
	}
}
