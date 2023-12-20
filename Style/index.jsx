import { import_meta_env_ } from 'ctx-core/env'
import { GlobalStyle } from '../GlobalStyle/index.jsx'
import { minifycss } from '../minifycss'
import { Singleton_ } from '../Singleton/index.jsx'
/** @typedef {import('solid-js').VoidProps} */
/**
 * @param {($p:VoidProps<{ label?:string }>)=>string}css_
 * @returns {Component<VoidProps<{label?: string}>>}
 * @private
 */
export function Style_(css_) {
	return Singleton_($p=>{
		return <GlobalStyle label={$p?.label}>{
			import_meta_env_().NODE_ENV === 'production'
				? minifycss(css_($p))
				: css_($p)
		}</GlobalStyle>
	})
}
