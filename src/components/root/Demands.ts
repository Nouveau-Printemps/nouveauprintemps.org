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
                Remettre en place une véritable démocratie en France
            </r-demand>
            <r-demand src="https://placehold.co/300x300" alt="Temp" left="true">
                Lutter activement contre le changement climatique et contre l'exploitation des ressources
            </r-demand>
            <r-demand src="https://placehold.co/300x300" alt="Temp">
                Remettre le citoyen au centre des politiques et des actions
            </r-demand>
            <simple-button href="/">Lire la version longue</simple-button>
        `
    }
}



@customElement("r-demand")
// @ts-ignore
class Demand extends Component {
    @property({type: Boolean})
    left? = false
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

      .light p {
        color: var(--color-dark);
      }
      img {
        ${shadowImg};
      }
    `

    render() {
        const content = this.innerHTML.trim()
        if (this.left) {
            return html`
                <div class="light">
                    <p>${content}</p>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `
        }
        return html`
            <div>
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