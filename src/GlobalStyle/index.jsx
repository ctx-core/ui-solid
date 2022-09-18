import { createEffect, createMemo, createSignal } from 'solid-js'
import { Style } from 'solid-start'
/** @typedef {import('solid-js').Accessor}Accessor */
export const GlobalStyle = $p=>{
	const [ref_, ref__set] = createSignal()
	/** @type {Accessor<string>} */
	const css_ = createMemo(()=>$p.css || $p.children)
	createEffect(()=>{
		const ref = ref_()
		if (ref) {
			ref.innerHTML = css_()
		}
	})
	return <Style ref={$=>{
		ref__set($)
		if ($p.ref) $p.ref($)
	}} data-label={$p.label}>{css_()}</Style>
}
