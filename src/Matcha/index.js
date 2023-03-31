import { createMemo } from 'solid-js'
/** @typedef {import('solid-js').JSX}JSX */
/** @typedef {import('solid-js').ParentProps}ParentProps */
/**
 * @param {ParentProps<{ whenthen: [any, ()=>JSX.Element] }[]>}$p
 * @returns {JSX.Element}
 * @private
 */
export function Matcha($p) {
	const children_ = createMemo(()=>{
		const whenthen = $p.whenthen
		for (let i=0; i < whenthen.length; i++) {
			const $a = whenthen[i]
			if ($a[0]) return $a[1]()
		}
		return $p.children
	})
	return children_
}
