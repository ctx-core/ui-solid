import { GlobalStyle } from '../GlobalStyle/index.jsx'
import { minifycss } from '../minifycss/index.js'
import { Singleton_ } from '../Singleton_/index.jsx'
export function Style_(css_) {
	return Singleton_($p=>{
		return <GlobalStyle label={$p?.label}>{
			process.env.NODE_ENV === 'production'
			? minifycss(css_($p))
			: css_($p)
		}</GlobalStyle>
	})
}
