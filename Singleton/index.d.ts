import type { signal_T } from '@ctx-core/solid-js'
import type { Be, ctx_T } from 'ctx-core/be'
import type { Component, Context, JSX, ParentProps } from 'solid-js'
export declare function Singleton_<
	Props_T extends ParentProps<{ label?:string }> = ParentProps<{ label?:string }>
>(
	C:Component<{ label?:string }>,
	proto_key_a__signal_?:Be<signal_T<any>>,
	label?:string
):Component<Props_T>
export function Singleton<Key>(
	$p:ParentProps<Singleton_props_T<Key>>
):JSX.Element
export interface Singleton_props_T<Key> {
	key:Key
	proto_key_a__signal:signal_T<Key[]>
	label?:string
}
export declare const Singleton__ctx__Context:Context<ctx_T>
export declare function Singleton__ctx__Context__use():ctx_T
