import {css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {textColor} from "../statics";
import {Component} from "../Component.ts";

@customElement("simple-button")
export class SimpleButton extends Component {
    static styles = css`
      :host {
        width: 100%;
      }

      div {
        display: flex;
        font-size: 32px;
        justify-content: center;
      }

      a {
        ${textColor};
        text-decoration: none;
        outline: var(--color-light) solid 3px;
        padding: 0.5em;
        transition: .3s;
        text-transform: uppercase;
        font-weight: bold;
        transform: scale(1, 1.1);
      }

      a:hover {
        background: #e1e1e1;
        color: black;
        transition: .5s;
      }
    `

    @property({type: String})
    href = ""

    render() {
        const content = this.innerHTML
        return html`
            <div>
                <a href="${this.href}">${content}</a>
            </div>
        `
    }
}