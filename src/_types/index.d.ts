import type { Ctx } from '@ctx-core/object'
import type { APIEvent } from 'solid-start'
import type { FetchEvent, PageEvent, ServerFunctionEvent } from 'solid-start/server/types'
export type signal_T<T> = [()=>T, (val:T)=>void]
export type FetchEvent_w_ctx_T = (FetchEvent|ServerFunctionEvent|APIEvent|PageEvent)&{
	locals:FetchEvent__locals_T
}
export type PageEvent_w_ctx_T = PageEvent&({
	locals:FetchEvent__locals_T
})
export type APIEvent_w_ctx_T = FetchEvent&APIEvent&({
	locals:FetchEvent__locals_T
})
type FetchEvent__locals_T = Record<string, unknown>&{
	ctx:Ctx
}
