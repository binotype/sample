// vite.config.ts
import stencil from "unplugin-stencil/vite"
import { defineConfig } from "vitest/config"
import { webdriverio } from "@vitest/browser-webdriverio"

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			provider: webdriverio(),
			instances: [{ browser: "chrome" }],
		},
		typecheck: {
			tsconfig: "./tsconfig.json",
		},
		coverage: {
			reporter: ["text", "json", "html"],
			provider: "istanbul",
		},
		globals: true,
		include: ["**/*.spec.[tj]s"],
		testTimeout: 20000,
		isolate: false,
		exclude: ["node_modules", "dist"],
		server: {
			deps: {
				inline: [
					"authly",
					"isly",
					"typedly",
					"cloudly-analytics",
					"cryptly",
					"isoly",
					"cloudly-http",
					"sessionly",
					"flagly",
					"cloudly-storage",
					"cloudly-rest",
					"tidily",
					"gracely",
					"cloudly-router",
					"selectively",
					"langly",
				],
			},
		},
	},
	plugins: [
		stencil({
			/* Stencil configuration overwrites */
		}),
	],
})
