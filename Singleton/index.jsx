import { be_ } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { createContext, createSignal, onCleanup, Show, useContext } from 'solid-js'
/** @typedef {import('@ctx-core/object').Be} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('@ctx-core/solid-js').signal_T} */
/** @typedef {import('solid-js').Component} */
/** @typedef {import('solid-js').Context} */
/** @typedef {import('solid-js').ParentProps} */
/** @typedef {import('./index.d.ts').Singleton_props_T} */
/**
 * @param {Component<{ label?:string }>}C
 * @param {Be<signal_T<any>>}[proto_key_a__signal_]
 * @param {string}[label]
 * @returns {Component<ParentProps<{ label?:string }>>}
 * @private
 */
export function Singleton_(
	C,
	proto_key_a__signal_,
	label
) {
	if (!proto_key_a__signal_) proto_key_a__signal_ = be_(()=>
		createSignal([]))
	return ($p=>{
		const proto_key_a__signal =
			proto_key_a__signal_(
				Singleton__ctx__Context__use()
				|| ctx__Context__use())
		return (
			<Singleton
				key={$p}
				proto_key_a__signal={proto_key_a__signal}
				label={label}
			>
				<C {...$p}/>
			</Singleton>)
	})
}
/**
 * @param {ParentProps<Singleton_props_T<unknown>>}$p
 * @returns {JSX.Element}
 * @constructor
 */
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
/** @type {Context<Ctx>} */
export const Singleton__ctx__Context = createContext()
/**
 * @returns {Ctx}
 */
export function Singleton__ctx__Context__use() {
	return useContext(Singleton__ctx__Context)
}
