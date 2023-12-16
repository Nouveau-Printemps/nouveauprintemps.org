import {Component} from "../Component.ts";
import {customElement, property} from "lit/decorators.js";
import {css, html} from "lit";
import {unsafeHTML} from "lit/directives/unsafe-html.js";

import './Button.ts'
import {shadowImg} from "../statics.ts";

@customElement("g-paragraph")
export class GlobalParagraph extends Component {
    static styles = css`
      :host {
        padding: 10%;
        background: var(--color-light);
        display: block;
      }
      p, ul {
        margin-top: 2rem;
      }
      li {
        margin-top: 0.5rem;
      }
      .dark {
        color: var(--color-light);
      }
      a {
        color: var(--color-dark);
      }
      .dark a {
        color: var(--color-light);
      }
    `

    @property({type: String})
    title = ""

    @property({type: String})
    color = "light"

    @property({type: Boolean})
    noMargin = false

    render() {
        const content = this.content()
        if (this.color != "light") this.style.background = this.genColor(this.color)
        if (this.noMargin) this.style.padding = "0"
        return html`
            <div class=${this.color == "dark" ? "dark" : "light"}>
                <h2>${this.title}</h2>
                ${unsafeHTML(content)}
            </div>
        `
    }
}

@customElement("g-pib")
export class ParagraphImageButton extends Component {
    static styles = css`
      :host {
        padding: 10%;
        display: block;
      }
      .content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 10%;
        align-items: center;
        justify-content: center;
        align-content: center;
      }
      .left {
        grid-template-columns: 1fr 2fr;
      }
      img {
        margin: 0 auto;
        width: 40%;
      }
      .shadow {
        ${shadowImg};
      }
      simple-button {
        margin-top: 10%;
      }
    `

    @property({type: String})
    title = "Placeholder"

    @property({type: String})
    link = "/"

    @property({type: String})
    color = "light"

    @property({type: String})
    img = "https://placehold.co/256x256"

    @property({type: Boolean})
    left = false

    @property({type: Boolean})
    shadowImage = false
    
    @property({type: String})
    btn?: string = undefined

    private button() {
        if (this.btn === undefined) this.btn = this.title
        if (this.color !== "dark") {
            return html`
                <simple-button href="${this.link}" light>${this.btn}</simple-button>
            `
        }
        return html`
            <simple-button href="${this.link}">${this.btn}</simple-button>
        `
    }

    render() {
        if (this.color !== "light") this.style.background = this.genColor(this.color)
        if (this.left) {
            return html`
            <div class="content left">
                <img src="${this.img}" alt="QR Code" class=${this.shadowImage ? "shadow" : ""}>
                <g-paragraph title="${this.title}" noMargin color="${this.color}">
                    ${unsafeHTML(this.content())}
                </g-paragraph>
            </div>
            ${this.button()}
        `
        }
        return html`
            <div class="content">
                <g-paragraph title="${this.title}" noMargin color="${this.color}">
                    ${unsafeHTML(this.content())}
                </g-paragraph>
                <img src="${this.img}" alt="QR" class=${this.shadowImage ? "shadow" : ""}>
            </div>
            ${this.button()}
        `
    }
}
