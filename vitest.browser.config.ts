import { defineConfig } from "vite"
import { webdriverio } from "@vitest/browser-webdriverio"

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			provider: webdriverio(),
			instances: [
				{
					browser: "chrome",
				},
			],
			// Skip dependency optimization for better module resolution
			api: {
				port: 63315,
			},
		},
		globals: true,
		include: ["**/*.spec.[tj]s"],
		exclude: ["node_modules", "dist", "www"],
		testTimeout: 30000,
		typecheck: {
			tsconfig: "./tsconfig.json",
		},
		coverage: {
			reporter: ["text", "json", "html"],
			provider: "istanbul",
		},
	},
	optimizeDeps: {
		disabled: true,
	},
})
