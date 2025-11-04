export interface Design {
	logotype?: string
	navigation?: "header" | "body"
	styles: string[]
	home: {
		mode: "body" | "full" | "header" | "list" | "summary"
		section: "article"
	}
	list: {
		mode: "body" | "full" | "header" | "list" | "summary"
	}
}
export namespace Design {}
