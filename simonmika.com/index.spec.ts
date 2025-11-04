import { model } from "../src/model"
import { site } from "./index"
import { describe, expect, it } from "vitest"

describe("simonmika-com", () => {
	it.each([
		"/",
		"/articles",
		"/articles/abstractions",
		"/articles/naming",
		"/articles/to-live",
		"/about",
		"/contact",
		"/talks",
		"/non-existent",
	] as const)("model.Context.load(%s)", path => expect(model.Context.load(site, path)).toMatchSnapshot())
})
