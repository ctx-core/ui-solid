import { mergeProps, onCleanup, onMount, } from 'solid-js'
import { CloseDialogHandle } from '../CloseDialogHandle/index.js'
import { Style_ } from '../Style_'
/** @type {import('./index.d.ts').ModalDialog__props_T}ModalDialog__props_T */
/**
 * @param $_p{ModalDialog__props_T}
 * @return {JSX.Element[]}
 * @constructor
 */
export function ModalDialog($_p) {
	const $p = mergeProps({
		class: '',
		width: '50rem',
		height: '50rem',
		full__max_width: '1215px',
		header__border_bottom: `1px solid #96ADB8`,
	}, $_p)
	onMount(()=>window.addEventListener('keydown', window__onKeyDown))
	onCleanup(()=>window.removeEventListener('keydown', window__onKeyDown))
	/**
	 * @param event{KeyboardEvent}
	 */
	function window__onKeyDown(event) {
		const { key } = event
		if (key === 'Escape') {
			$p.onClose()
		}
	}
	return [
		<ModalDialogStyle
			width={$p.width}
			height={$p.height}
			full__max_width={$p.full__max_width}
			header__border_bottom={$p.header__border_bottom}
		/>,
		<div class={`ModalDialog dialog-content ${$p.class}`}>
			<div class="header">
				<h3>{$p.title}</h3>
				<CloseDialogHandle onclick={()=>$p.onClose()}/>
			</div>
			<div class="body">
				{$p.children}
			</div>
		</div>
	]
}
// language=CSS
const ModalDialogStyle = /** @type {import('./index.d.ts').ModalDialogStyle_T} */ Style_($p=>`
	.ModalDialog {
		position: fixed;
		display: flex;
		flex-direction: column;
		top: 50%;
		left: 50%;
		margin-top: calc(-.5 * ${$p.height});
		margin-left: calc(-.5 * ${$p.width});
		max-height: ${$p.height};
		width: ${$p.width};
		overflow: auto;
		border: 1px solid black;
		background: white;
		box-shadow: -1px 0 40px 0 rgba(0, 0, 0, 0.6);
		z-index: 104;
	}
	@media screen and (max-width: ${$p.full__max_width}) {
		u.ModalDialog {
			height: 100vh;
			margin-top: -50vh;
			width: 100vw;
			margin-left: -50vw;
		}
	}
	@media screen and (max-height: 50rem) {
		.ModalDialog {
			height: 100vh;
			margin-top: -50vh;
		}
	}
	.ModalDialog > .header {
		flex: 0;
		display: flex;
		border-bottom: ${$p.header__border_bottom};
		height: 3.2rem;
		padding: 1rem;
	}
	.ModalDialog > .header > * {
		display: flex;
		align-items: center;
		margin: 0;
	}
	.ModalDialog > .header .close {
		flex-grow: 0;
		margin-right: 0.4rem;
	}
	.ModalDialog > .header h3 {
		flex: 1;
	}
	.ModalDialog > .body {
		flex: 1;
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
	}
`)
