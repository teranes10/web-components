// import { PREFIX } from '../assets/values/constants'
// import { BaseElement } from './base/BaseElement'
// import { customElement, property } from './base/decorators'
// import { css, html } from './base/templates'

// @customElement(`${PREFIX}action-tab`)
// export class ActionTab extends BaseElement {
//   @property({ type: String }) tabText = ''
//   @property({ type: Boolean }) tabBlock = false

//   constructor() {
//     super()

//   }
//   render() {
//     return html`
//       <button>
//         <span class="button-text">${this.tabText}</span>
//       </button>
//     `
//   }

//   static get styles() {
//     return css`
//       button {
//         display: inline-flex;
//         vertical-align: top;
//         justify-content: center;
//         align-items: center;

//         min-width: var(--btn-width, var(--btn-size, 38px));
//         min-height: var(--btn-height, var(--btn-size, 38px));
//         padding: var(--btn-padding, 0.5rem 1.25rem);

//         cursor: pointer;
//         user-select: none;
//         text-decoration: none;
//         outline: none;
//         border: none;
//         border-radius: var(--btn-rounded, 0.375rem);

//         transition: ease-in-out 0.2s;
//       }
//     `
//   }
// }
