import type { ParentComponent } from 'solid-js'
export declare const GlobalStyle:ParentComponent<Style_props_T>
export type Style_props_T = {
	css?:string
	children?:string
	ref?:($:HTMLStyleElement)=>void
	label?:string
}&({ css:string }|{ children:string })
