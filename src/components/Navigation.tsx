import { FunctionalComponent, h } from "@stencil/core"
import { model } from "../model"
import { Menu } from "./Menu"

export const Navigation: FunctionalComponent<Navigation.Properties> = ({ items }) => (
	<nav>
		<Menu items={items} />
	</nav>
)
export namespace Navigation {
	export interface Properties {
		items: model.Context.Menu.Item[]
	}
}
