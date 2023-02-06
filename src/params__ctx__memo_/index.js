import { ctx_ } from '@ctx-core/object'
import { createMemo } from 'solid-js'
import { ctx__Context__use } from '../ctx__Context/index.js'
export function params__ctx__memo_(params) {
	return createMemo(()=>params.ctx || ctx__Context__use() || ctx_())
}
