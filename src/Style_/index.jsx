import { Style } from 'solid-start'
import { minifycss } from '../minifycss/index.js'
import { Singleton_ } from '../Singleton_/index.jsx'
export function Style_(css_) {
	return Singleton_($p=>{
		return <Style label={$p?.label} innerHTML={
			process.env.NODE_ENV === 'production'
			? minifycss(css_())
			: css_()
		}/>
	})
}
