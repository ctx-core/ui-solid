import { type Ctx } from '@ctx-core/object'
import { createContext, useContext } from 'solid-js'
export const Context_ctx = createContext<Ctx>()
export function use_Context_ctx() {
	return useContext<Ctx>(Context_ctx)
}
