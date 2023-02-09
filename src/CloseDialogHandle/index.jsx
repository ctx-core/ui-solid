import { Show } from 'solid-js'
/** @typedef {import('./index.d.ts').CloseDialogHandle__props_T}CloseDialogHandle__props_T */
/**
 * @param $p{CloseDialogHandle__props_T}
 * @returns{import('solid-js').JSX}
 */
export function CloseDialogHandle($p) {
	return (
		<a href="."
			 class={`close CloseDialogHandle ${$p.class ?? ''}`}
			 style="text-decoration: none;"
			 tabindex={$p.tabindex || '0'}
			 onclick={$=>{
				 $.preventDefault()
				 if ($p.onclick) $p.onclick($)
			 }}
		><Show when={!!$p.children} fallback={'✖'}>{$p.children}</Show></a>)
}
