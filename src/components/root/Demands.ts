import {css, html} from "lit";
import {customElement, property} from "lit/decorators.js";

import '../global/Button.ts'
import { textColor } from "../statics.ts";
import {Component} from "../Component.ts";

@customElement("r-demands")
export class RootDemands extends Component {
    static styles = css`
      :host {
        background: #0a0611;
        width: 100%;
        display: flex;
        gap: 50%;
        flex-direction: column;
        padding-top: 20%;
      }
      
      * {
        margin-bottom: 20%;
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
    src? = ""
    @property({type: String})
    alt? = ""

    static styles = css`
      :host {
        display: flex;
        align-items: center;
        margin: 0 10%;
        gap: 64px;
      }
      p {
        font-size: 52px;
        font-weight: bold;
        ${textColor};
      }
      //img {
      //  width: 400px;
      //}
    `

    render() {
        const content = this.innerHTML.trim()
        if (this.left) {
            return html`
                <p>${content}</p>
                <img src="${this.src}" alt="${this.alt}">
            `
        }
        return html`
            <img src="${this.src}" alt="${this.alt}">
            <p>${content}</p>
        `
    }
}

declare global {
    interface HTMLElementRootDemands {
        "r-demands": RootDemands
    }
}