import { createContext, useContext } from 'solid-js'
const ctx__Context__sym = Symbol.for('ctx__Context')
if (!globalThis[ctx__Context__sym]) globalThis[ctx__Context__sym] = createContext()
export const ctx__Context = globalThis[ctx__Context__sym]
export function ctx__Context__use() {
	return useContext(ctx__Context)
}
export {
	ctx__Context__use as use_Context_ctx,
	ctx__Context as Context_ctx,
}
