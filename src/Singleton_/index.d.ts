import type { Be } from '@ctx-core/object'
import type { Component, JSX, ParentProps } from 'solid-js'
import type { signal_T } from '../_types'
export declare function Singleton_<
	Props_T extends ParentProps<{ label?:string }> = ParentProps<{ label?:string }>
>(
	C:Component<{ label?:string }>,
	proto_key_a__?:Be<signal_T<any>>,
	label?:string
):Component<Props_T>
export function Singleton<Key>($p:ParentProps<Singleton_props_T<Key>>):JSX.Element
export interface Singleton_props_T<Key> {
	key:Key
	proto_key_a_:signal_T<Key[]>
	label?:string
}
