export function signal__toggle_($get, $set) {
	return ()=>$set(!$get())
}
