import {css, html} from "lit";
import {customElement, property} from "lit/decorators.js";

import '../global/Button.ts'
import {shadowImg, textColor} from "../statics.ts";
import {Component} from "../Component.ts";

@customElement("r-demands")
export class RootDemands extends Component {
    static styles = css`
      :host {
        background: var(--color-dark);
        width: 100%;
        display: flex;
        gap: 50%;
        flex-direction: column;
      }
      
      simple-button {
        padding-bottom: 10%;
      }      
    `
    render() {
        return html`
            <r-demand src="https://placehold.co/300x300" alt="Temp">
                Mettre en place une démocratie novatrice et respectueuse
            </r-demand>
            <r-demand src="https://placehold.co/300x300" alt="Temp">
                Lutter contre le changement climatique
            </r-demand>
            <r-demand src="https://placehold.co/300x300" alt="Temp">
                Remettre le citoyen au centre des politiques et actions
            </r-demand>
            <simple-button href="/nos-revendications">Lire la version longue</simple-button>
        `
    }
}



@customElement("r-demand")
// @ts-ignore
class Demand extends Component {
    @property({type: Boolean})
    left = false
    @property({type: String})
    src = ""
    @property({type: String})
    alt = ""
    @property({type: String})
    color = ""

    static styles = css`
      div {
        display: flex;
        align-items: center;
        padding: 10%;
        gap: 64px;
        background: var(--color-dark);
      }

      .light {
        background: var(--color-green);
      }

      p {
        font-size: 52px;
        font-weight: bold;
        ${textColor};
      }
      .left p {
        text-align: right;
      }

      .light p {
        color: var(--color-dark);
      }
      img {
        ${shadowImg};
      }
    `

    render() {
        const content = this.content()
        if (this.left) {
            return html`
                <div class="light left">
                    <p>${content}</p>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `
        }
        return html`
            <div class="right">
                <img src="${this.src}" alt="${this.alt}">
                <p>${content}</p>
            </div>
        `
    }
}

declare global {
    interface HTMLElementRootDemands {
        "r-demands": RootDemands
    }
}