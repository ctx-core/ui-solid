import type { Component, ParentProps } from 'solid-js'
export function Style_<
	Props_T extends ParentProps<{ label?:string }> = ParentProps<{ label?:string }>
>(css_:()=>string):Component<Props_T>
