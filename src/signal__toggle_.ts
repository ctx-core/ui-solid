export function signal__toggle_($get:()=>boolean, $set:($:boolean)=>void):()=>void {
	return ()=>$set(!$get())
}
