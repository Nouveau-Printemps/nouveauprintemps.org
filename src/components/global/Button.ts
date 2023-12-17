import {css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {textColor} from "../statics";
import {Component} from "../Component.ts";

@customElement("simple-button")
export class SimpleButton extends Component {
    static styles = css`
      :host {
        width: 100%;
        --delay: 1s;
        display: block;
      }

      div {
        display: flex;
        font-size: 32px;
        justify-content: center;
      }

      a {
        position: relative;
        z-index: 2;
        ${textColor};
        text-decoration: none;
        outline: var(--color-light) solid 3px;
        padding: 0.5em;
        text-transform: uppercase;
        font-weight: bold;
        transform: scale(1, 1.1);
        transition: .3s;
        transition-delay: var(--delay);
      }
      
      .light a {
        outline: var(--color-dark) solid 3px;
        color: var(--color-dark);
      }

      a:hover {
        color: var(--color-dark);
        transition: .3s;
        transition-delay: var(--delay);
      }
      .light a:hover {
        ${textColor};
      }
      
      span {
        position: absolute;
        display: block;
        height: 100%;
        width: 0;
        inset: 0;
        z-index: -1;
        box-sizing: content-box;
        background: var(--color-light);
        animation: off 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      .light span {
        background: var(--color-dark);
      }
      a:hover span {
        animation: on 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      
      @keyframes on {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
      @keyframes off {
        from {
          left: 0;
          width: 100%;
        }
        to {
          left: 100%;
          width: 0;
        }
      }
      @media only screen and (max-width: 810px) {
          div {
              font-size: 26px;
          }
      }
    `

    @property({type: String})
    href = ""

    @property({type: Boolean})
    light = false

    render() {
        const content = this.content()
        return html`
            <div class=${this.light ? "light" : ""}>
                <a href="${this.href}">
                    ${content}
                    <span></span>
                </a>
            </div>
        `
    }
}