// import { getColor } from '../assets/values/colors'
// import { PREFIX } from '../assets/values/constants'
// import { BaseElement } from './base/BaseElement'
// import { customElement, property } from './base/decorators'
// import { html } from './base/templates'

// @customElement(`${PREFIX}loading-icon`)
// export class LoadingIcon extends BaseElement {
//   @property({ type: Boolean }) active = false
//   @property({ type: Number }) size = 24
//   @property({ type: String }) color = ''

//   get computedColor() {
//     return getColor(this.color)
//   }

//   render() {
//     return html`
//       <svg
//         width="${this.size}"
//         viewBox="-2 -2 42 42"
//         xmlns="http://www.w3.org/2000/svg"
//         stroke="${this.computedColor}"
//         style="display: ${this.active ? 'inline' : 'none'}"
//       >
//         <g fill="none" fill-rule="evenodd">
//           <g transform="translate(1 1)" stroke-width="4">
//             <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
//             <path d="M36 18c0-9.94-8.06-18-18-18">
//               <animateTransform
//                 attributeName="transform"
//                 type="rotate"
//                 from="0 18 18"
//                 to="360 18 18"
//                 dur="1s"
//                 repeatCount="indefinite"
//               />
//             </path>
//           </g>
//         </g>
//       </svg>
//     `
//   }
// }
