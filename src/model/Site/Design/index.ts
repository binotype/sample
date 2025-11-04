export interface Design {
	logotype?: string
	icon?: string
	navigation?: "header" | "body"
	styles?: string[]
	scripts?: string[]
	home?: {
		mode: "body" | "full" | "header" | "list" | "summary"
		section: "article"
	}
	list?: {
		mode: "body" | "full" | "header" | "list" | "summary"
	}
}
export namespace Design {}
