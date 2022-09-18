import type { Be } from '@ctx-core/object'
import type { Component, JSX, JSXElement, ParentProps } from 'solid-js'
import type { signal_T } from '../_types'
export declare function Singleton_<Props = ParentProps<{ label?:string }>>(
	C:Component<Props>, proto_key_a__?:Be<signal_T<any>>, label?:string
):JSXElement
export function Singleton<Key = ParentProps>($p:ParentProps<Singleton_props_T<Key>>):JSX.Element
export interface Singleton_props_T<Key> {
	key:Key
	proto_key_a_:signal_T<Key[]>
	label?:string
}
