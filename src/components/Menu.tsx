import { FunctionalComponent, h } from "@stencil/core"

export const Menu: FunctionalComponent<Menu.Properties> = ({ menu }) => (
	<ul>
		{menu.map(item => (
			<li class={item.selected == "current" ? "current" : item.selected == "parent" ? "current-parent" : ""}>
				<a href={item.url}>{item.name}</a>
				{item.children && <Menu menu={item.children} />}
			</li>
		))}
	</ul>
)

export namespace Menu {
	export interface Properties {
		menu: {
			name: string
			url: string
			selected?: "current" | "parent"
			children?: Properties["menu"]
		}[]
	}
}
