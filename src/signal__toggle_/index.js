/**
 * @param {()=>boolean}$get
 * @param {($:boolean)=>void}$set
 * @returns {()=>void}
 * @private
 */
export function signal__toggle_($get, $set) {
	return ()=>$set(!$get())
}
