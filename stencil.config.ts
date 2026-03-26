import { Config } from "@stencil/core"
import { sass } from "@stencil/sass"
import { inlineSvg } from "stencil-inline-svg"

const dev = process.argv.includes("--dev")

export const config: Config = {
	namespace: "website",
	autoprefixCss: false,
	buildEs5: "prod",
	devServer: {
		port: 3333,
		reloadStrategy: "pageReload",
	},
	extras: {
		enableImportInjection: true,
	},
	globalStyle: "design/style/index.scss",
	hashFileNames: !dev,
	hydratedFlag: {
		selector: "attribute",
	},
	outputTargets: [
		{
			type: "dist-custom-elements",
			dir: "dist/components",
			customElementsExportBehavior: "default",
			externalRuntime: false,
			generateTypeDeclarations: true,
			includeGlobalScripts: false,
		},
		{
			type: "dist",
			dir: "dist",
		},
		{
			type: "dist-hydrate-script",
			dir: "dist/hydrate",
		},
		{
			type: "docs-vscode",
			file: "dist/docs/components-site-core-vscode.json",
		},
		{
			type: "www",
			// comment the following line to disable service workers in production
			serviceWorker: null,
			baseUrl: "https://sample.binotype.org/",
			prerenderConfig: "./prerender.config.ts",
			copy: [
				{ src: "../design/icon/*", dest: "icon/" },
				{ src: "../design/assets/*", dest: "assets/" },
			],
		},
	],
	plugins: [inlineSvg(), sass()],
	testing: {
		browserHeadless: "shell",
	},
}
