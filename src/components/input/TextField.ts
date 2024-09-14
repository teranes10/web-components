import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import { PREFIX } from "../../assets/values/constants";
import { classMap } from "lit/directives/class-map.js";
import { hasSlot } from "../../functions/HasSlot";
import { globalStyles } from "../../assets/values/globalStyles";

@customElement(`${PREFIX}text-field`)
export class TextField extends LitElement {
  @property({ type: String }) label?: string;
  @property({ type: String }) tag?: string;
  @property({ type: String }) placeholder?: string;
  @property({ type: String }) helperText?: string;
  @property({ type: String }) message?: string;
  @property({ type: String }) size?: string;
  @property({ type: String }) color?: string;
  @property({ type: Number }) rows?: number;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Function }) formatter?: (value: string) => string;

  private value = "";

  private onTextChange(event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.dispatchEvent(new Event("input", { bubbles: true }));
  }

  private headerTemplate() {
    return html`
      <div class="text-field-label-container">
        <span class="text-field-label ${this.required ? "required" : ""}">
          ${this.label}
        </span>
        <span class="text-field-tag">${this.tag ?? ""}</span>
      </div>
    `;
  }

  private textareaTemplate() {
    return html`
      <textarea
        class="${classMap({
          "text-field-input": true,
          [`${this.size}`]: !!this.size,
          [`${this.color}`]: !!this.color,
        })}"
        placeholder="${this.placeholder ?? ""}"
        ?disabled="${!!this.disabled}"
        .value="${this.value}"
        rows="${this.rows ?? 1}"
        @input="${this.onTextChange}"
      ></textarea>
    `;
  }

  private inputTemplate() {
    return html`
      <input
        type="text"
        class="${classMap({
          "text-field-input": true,
          [`${this.size}`]: !!this.size,
          [`${this.color}`]: !!this.color,
        })}"
        placeholder="${this.placeholder ?? ""}"
        ?disabled="${this.disabled}"
        .value="${this.value}"
        @input="${this.onTextChange}"
      />
    `;
  }

  private inputContainerTemplate() {
    return html`
      <div class="text-field-input-container">
        ${hasSlot(this.shadowRoot, "pre")
          ? html`<div class="text-field-input-pre">
              <slot name="pre"></slot>
            </div>`
          : ""}
        ${hasSlot(this.shadowRoot, "post")
          ? html`<div class="text-field-input-post">
              <slot name="post"></slot>
            </div>`
          : ""}
        ${this.rows ? this.textareaTemplate() : this.inputTemplate()}
      </div>
    `;
  }

  private footerTemplate() {
    return html`
      ${this.helperText
        ? html`<div class="text-field-helper-text">${this.helperText}</div>`
        : ""}
      ${this.message
        ? html`<div
            class="text-field-message ${classMap({
              [this.color ?? ""]: !!this.color,
            })}"
          >
            ${this.message}
          </div>`
        : ""}

      <ul class="text-field-errors-container"></ul>
    `;
  }

  render() {
    return html`
      <label class="text-field">
        ${this.headerTemplate()} ${this.inputContainerTemplate()}
        ${this.footerTemplate()}
      </label>
    `;
  }

  static styles = css`
    ${globalStyles}

    .text-field {
      display: block;
    }

    .text-field-label-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      user-select: none;
    }

    .text-field-label {
      font-size: 12px;
      font-weight: 500;
      color: var(--color-gray-600);
    }

    .text-field-label.required + .text-field-label::after {
      content: "*";
      margin-left: 0.25rem;
      color: var(--color-danger);
    }

    .text-field-tag {
      font-size: 12px;
      font-weight: 500;
      color: var(--color-gray-900);
    }

    .text-field-input-container {
      position: relative;
    }

    .text-field-input {
      width: 100%;
      height: 38px;
      outline: none;
      border-radius: 0.375rem;
      padding: 0 0.75rem;
      font-size: 14px;
      font-weight: 400;
      color: var(--color-gray-900);
      border: 1px solid var(--color-gray-200);
    }

    textarea.text-field-input {
      height: auto;
    }

    .text-field-input.sm {
      height: 34px;
      font-size: 12px;
    }

    .text-field-input.lg {
      height: 42px;
      font-size: 16px;
    }

    .text-field-input::placeholder {
      color: var(--color-gray-400);
    }

    .text-field-input:hover {
      border: 1px solid var(--color-gray-300);
    }

    .text-field-input:focus {
      border: 1px solid var(--color-gray-200);
      box-shadow: 0 0 0 3px var(--color-gray-100);
    }

    .text-field-input:disabled,
    .text-field-input.disabled {
      background-color: var(--color-gray-50);
      color: var(--color-gray-600);
    }

    .text-field-input-pre,
    .text-field-input-post {
      min-width: 40px;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-gray-600);
    }

    .text-field-input-post {
      right: 0;
    }

    .text-field-input-pre + .text-field-input {
      padding-left: 40px;
    }

    .text-field-input-post + .text-field-input {
      padding-right: 40px;
    }

    .text-field-helper-text,
    .text-field-message {
      margin-top: 0.25rem;
      font-weight: 400;
      font-size: 12px;
      color: var(--color-gray-800);
    }

    .textFieldErrorsContainer {
      list-style-type: disc;
      list-style-position: inside;
      text-align: left;
    }
  `;
}
