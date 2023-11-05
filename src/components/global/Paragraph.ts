import {Component} from "../Component.ts";
import {customElement, property} from "lit/decorators.js";
import {css, html} from "lit";
import {unsafeHTML} from "lit/directives/unsafe-html.js";

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