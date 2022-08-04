import { createEffect, createMemo, createSignal } from 'solid-js'
export const GlobalStyle = $p=>{
	const [ref_, ref__set] = createSignal()
	const css_ = createMemo(()=>$p.css || $p.children)
	createEffect(()=>{
		const ref = ref_()
		if (ref) {
			ref.innerHTML = css_()
		}
	})
	return <style ref={$=>{
		ref__set($)
		if ($p.ref) $p.ref($)
	}} data-label={$p.label}>{css_()}</style>
}
