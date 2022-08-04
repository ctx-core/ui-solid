import { createEffect, createMemo, createSignal, type ParentComponent } from 'solid-js'
export const GlobalStyle:ParentComponent<Style_props_T> = $p=>{
	const [ref_, ref__set] = createSignal<HTMLStyleElement>()
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
export type Style_props_T = {
	css?:string
	children?:string
	ref?:($:HTMLStyleElement)=>void
	label?:string
}&({ css:string }|{ children:string })
