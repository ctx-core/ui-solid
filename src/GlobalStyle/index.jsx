import { createEffect, createMemo, createSignal, Show, useContext } from 'solid-js'
import { MetaContext, Style } from '@solidjs/meta'
/** @typedef {import('solid-js').ParentProps}ParentProps */
/** @typedef {import('./index.d.ts').Style_props_T}Style_props_T */
/**
 * @param {ParentProps<Style_props_T>}$p
 * @returns {JSX.Element}
 * @private
 */
export function GlobalStyle($p) {
	const [ref_, ref__set] = createSignal()
	/** @type {Accessor<string>} */
	const css_ = createMemo(()=>$p.css || $p.children)
	return (
		<Show
			when={!!useContext(MetaContext)}
			fallback={()=><style innerHTML={css_()}/>}
		>
			<MetaContextStyle/>
		</Show>
	)
	function MetaContextStyle() {
		createEffect(()=>{
			const ref = ref_()
			if (ref) ref.innerHTML = css_()
		})
		return (
			<Style ref={$=>{
				ref__set($)
				if ($p.ref) $p.ref($)
			}} data-label={$p.label ?? ''}>{css_()}</Style>
		)
	}
}
