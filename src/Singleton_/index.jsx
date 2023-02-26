import { be_ } from '@ctx-core/object'
import { createSignal, onCleanup, Show } from 'solid-js'
import { ctx__Context__use } from '../ctx__Context/index.js'
export function Singleton_(C, proto_key_a__signal_, label) {
	if (!proto_key_a__signal_) proto_key_a__signal_ = be_(()=>createSignal([]))
	return ($p=>{
		const proto_key_a__signal = proto_key_a__signal_(ctx__Context__use())
		return (
			<Singleton key={$p} proto_key_a__signal={proto_key_a__signal} label={label}>
				<C {...$p}/>
			</Singleton>)
	})
}
export function Singleton($p) {
	const key = $p.key
	const [proto_key_a_, proto_key_a__set] = $p.proto_key_a__signal
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
