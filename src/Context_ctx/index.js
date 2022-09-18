import { createContext, useContext } from 'solid-js'
export const Context_ctx = createContext()
export function use_Context_ctx() {
	return useContext(Context_ctx)
}
