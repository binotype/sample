import { FunctionalComponent, h } from "@stencil/core"

export const Menu: FunctionalComponent<Menu.Properties> = ({ items }) => (
	<ul>
		{items.map(item => (
			<li class={item.selected == "current" ? "current" : item.selected == "parent" ? "current-parent" : ""}>
				<a href={item.url}>{item.label}</a>
				{item.items && <Menu items={item.items} />}
			</li>
		))}
	</ul>
)

export namespace Menu {
	export interface Properties {
		items: {
			label: string
			url: string
			selected?: "current" | "parent"
			items?: Properties["items"]
		}[]
	}
}
