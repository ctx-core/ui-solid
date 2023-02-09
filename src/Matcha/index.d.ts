import type { JSX, ParentProps } from 'solid-js'
export function Matcha<E = JSX.Element>($p:ParentProps<{
	whenthen:[any, ()=>E][]
}>):E
