import { model } from "../src/model"
import { site } from "./index"

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
	])("model.Context.load(%s)", path => expect(model.Context.load(site, path)).toMatchSnapshot())
})
