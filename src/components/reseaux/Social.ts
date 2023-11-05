import {Component} from "../Component.ts";
import {customElement, property} from "lit/decorators.js";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {css, html} from "lit";

import '../global/Paragraph.ts'
import '../global/Button.ts'

@customElement('re-social')
export class ReseauxSocial extends Component {
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
      }
      simple-button {
        margin-top: 5%;
      }
    `

    @property({type: String})
    plateforme = "Placeholder"

    @property({type: String})
    link = "/"

    @property({type: String})
    color = "light"

    @property({type: String})
    qr = "https://placehold.co/256x256"

    @property({type: Boolean})
    left = false

    private button() {
        if (this.color !== "dark") {
            return html`
                <simple-button href="${this.link}" light>${this.plateforme}</simple-button>
            `
        }
        return html`
            <simple-button href="${this.link}">${this.plateforme}</simple-button>
        `
    }

    render() {
        if (this.color !== "light") this.style.background = this.genColor(this.color)
        if (this.left) {
            return html`
            <div class="content left">
                <img src="${this.qr}" alt="QR Code">
                <g-paragraph title="${this.plateforme}" noMargin color="${this.color}">
                    ${unsafeHTML(this.content())}
                </g-paragraph>
            </div>
            ${this.button()}
        `
        }
        return html`
            <div class="content">
                <g-paragraph title="${this.plateforme}" noMargin color="${this.color}">
                    ${unsafeHTML(this.content())}
                </g-paragraph>
                <img src="${this.qr}" alt="QR">
            </div>
            ${this.button()}
        `
    }
}