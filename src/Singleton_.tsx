import { type Be, be_ } from '@ctx-core/object'
import { type Component, createSignal, JSX, onCleanup, type ParentProps, Show } from 'solid-js'
import type { signal_T } from './_types'
import { use_Context_ctx } from './Context_ctx.js'
export function Singleton_<Props = ParentProps<{ label?:string }>>(
	C:Component<Props>, proto_key_a__?:Be<signal_T<any>>, label?:string
) {
	if (!proto_key_a__) proto_key_a__ = be_(()=>createSignal([]))
	return $p=>{
		const proto_key_a_ = proto_key_a__(use_Context_ctx())
		return (
			<Singleton key={$p} proto_key_a_={proto_key_a_} label={label}>
				<C {...$p}/>
			</Singleton>)
	}
}
export function Singleton<Key = ParentProps>($p:ParentProps<Singleton_props_T<Key>>):JSX.Element {
	const key = $p.key
	const [proto_key_a_, proto_key_a__set] = $p.proto_key_a_
	const proto_key_a = proto_key_a_()
	proto_key_a.push(key)
	proto_key_a__set(proto_key_a.slice())
	onCleanup(()=>{
		queueMicrotask(()=>{
			const proto_key_a = proto_key_a_().slice()
			proto_key_a.splice(proto_key_a.indexOf(key), 1)
			proto_key_a__set(proto_key_a)
		})
	})
	return <Show when={proto_key_a_()[0] === key}>{$p.children}</Show>
}
export interface Singleton_props_T<Key> {
	key:Key
	proto_key_a_:signal_T<Key[]>
	label?:string
}
