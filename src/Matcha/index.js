import { createMemo } from 'solid-js'
export function Matcha($p) {
	const children_ = createMemo(()=>{
		const whenthen = $p.whenthen
		for (let i=0; i < whenthen.length; i++) {
			const $a = whenthen[i]
			if ($a[0]) return $a[1]
		}
		return $p.children
	})
	return children_
}
