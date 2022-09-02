import { defineConfig } from 'vite'
import { resolve } from 'path'
import solid from 'vite-plugin-solid'
import * as pkg from './package.json' assert { type: 'json' }
const { name, version } = pkg
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es'],
			name,
		},
		outDir: './lib'
	},
	define: {
		pkgJson: { name, version },
	},
	plugins: [solid()],
})
