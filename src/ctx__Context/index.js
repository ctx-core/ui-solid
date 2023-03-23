import { globalThis__prop__ensure } from '@ctx-core/object'
import { createContext, useContext } from 'solid-js'
export const ctx__Context = globalThis__prop__ensure(
	Symbol.for('ctx__Context'),
	()=>createContext())
export function ctx__Context__use() {
	return useContext(ctx__Context)
}
export {
	ctx__Context__use as use_Context_ctx,
	ctx__Context as Context_ctx,
}
