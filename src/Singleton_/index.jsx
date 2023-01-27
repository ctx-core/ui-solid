import { be_ } from '@ctx-core/object'
import { createSignal, onCleanup, Show } from 'solid-js'
import { use_Context_ctx } from '../Context_ctx/index.js'
export function Singleton_(C, proto_key_a__, label) {
	if (!proto_key_a__) proto_key_a__ = be_(()=>createSignal([]))
	return $p=>{
		const proto_key_a_ = proto_key_a__(ctx__Context__use())
		return (
			<Singleton key={$p} proto_key_a_={proto_key_a_} label={label}>
				<C {...$p}/>
			</Singleton>)
	}
}
export function Singleton($p) {
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
