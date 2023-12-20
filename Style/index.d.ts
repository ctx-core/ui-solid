import type { Component, VoidProps } from 'solid-js'
export function Style_<
	Props_T extends VoidProps<{ label?:string }> = VoidProps<{ label?:string }>,
>(css_:($p:Props_T)=>string):Component<Props_T>
