import {Component} from "../Component.ts";
import {customElement, property} from "lit/decorators.js";
import {css, html} from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import {shadowImg} from "../statics.ts";

@customElement("r-about")
export class RootAbout extends Component {
    static styles = css`
      :host {
        display: block;
        margin: 10%;
      }
      h2 {
        margin-bottom: 5%;
      }
      div {
        display: grid;
        width: 100%;
        grid-template-columns: 3fr 1fr;
        gap: 20%;
        align-items: center;
        align-content: center;
        justify-content: center;
      }
      p {
        font-size: 1.65em;
      }
      img {
        ${shadowImg};
      }
    `

    @property({type: String})
    src = ""
    @property({type: String})
    alt = ""

    render() {
        const content = this.innerHTML.trim()
        return html`
            <h2>Qui sommes-nous ?</h2>
            <div>
                <p>${unsafeHTML(content)}</p>
                <img src="${this.src}" alt="${this.alt}">
            </div>
        `
    }
}