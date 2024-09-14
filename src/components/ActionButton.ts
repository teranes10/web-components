import { customElement, property } from "lit/decorators.js";
import { getColor } from "../assets/values/colors";
import { css, html, LitElement } from "lit";
import { PREFIX } from "../assets/values/constants";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { emit } from "../functions/Emit";
import { globalStyles } from "../assets/values/globalStyles";

@customElement(`${PREFIX}action-button`)
export class ActionButton2 extends LitElement {
  @property({ type: String }) text = "";
  @property({ type: Boolean }) block = false;
  @property({ type: String }) size = "";
  @property({ type: String }) color = "";
  @property({ type: String }) textColor = "";
  @property({ type: Boolean }) loading = false;

  onClick(e: MouseEvent) {
    emit(this, "onclick", e);
  }

  render() {
    return html`
      <button
        class="${classMap({
          button: true,
          block: this.block,
          [this.size]: this.size,
        })}"
        style="${styleMap({
          background: getColor(this.color),
          color: getColor(this.textColor, "white"),
        })}"
        @click="${this.onClick}"
      >
        ${this.loading
          ? html`<loading-icon style="display: inline;"></loading-icon>`
          : html`<slot class="button-icon"></slot>`}
        <span class="button-text">${this.text}</span>
      </button>
    `;
  }

  static styles = css`
    ${globalStyles}

    button {
      display: inline-flex;
      vertical-align: top;
      justify-content: center;
      align-items: center;
      min-width: var(--btn-width, var(--btn-size, 38px));
      min-height: var(--btn-height, var(--btn-size, 38px));
      padding: var(--btn-padding, 0.5rem 1.25rem);
      cursor: pointer;
      user-select: none;
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: var(--btn-rounded, 0.375rem);
      transition: ease-in-out 0.2s;
    }

    ::slotted(svg) {
      width: calc(var(--btn-font-size, 14px) + 5px);
      height: calc(var(--btn-font-size, 14px) + 5px);
    }

    .button-text {
      font-size: var(--btn-font-size, 14px);
      font-weight: 400;
      letter-spacing: 1px;
    }

    .button-icon + .button-text:not(:empty) {
      margin-left: 7.5px;
    }

    button:hover {
      opacity: 0.9;
    }

    button:active {
      opacity: 0.8;
      transform: translate(2.5px, 2.5px);
    }

    button.block {
      width: 100%;
    }

    button.xs {
      --btn-size: 30px;
      --btn-padding: 0.1rem 0.65rem;
      --btn-font-size: 12px;
    }

    button.sm {
      --btn-size: 34px;
      --btn-padding: 0.125rem 0.75rem;
      --btn-font-size: 12px;
    }

    button.lg {
      --btn-size: 42px;
      --btn-padding: 0.5rem 1rem;
      --btn-font-size: 16px;
    }
  `;
}
