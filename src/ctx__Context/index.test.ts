import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { ctx__Context } from './index.js'
test('ctx__Context', async ()=>{
	equal(!!ctx__Context.Provider, true)
})
test.run()
