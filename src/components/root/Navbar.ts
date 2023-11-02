import { customElement } from "lit/decorators.js";
import {css, html, LitElement} from "lit";
import {textColor} from "../statics.ts";

@customElement('r-navbar')
export class RootNavbar extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      :host {
        font-size: 24px;
        display: flex;
        width: 100%;
        ${textColor};
        text-transform: uppercase;
        align-items: center;
      }
      nav {
        margin: 0 16px 0 auto;
        padding-top: 16px;
        display: flex;
        gap: 32px;
        width: 50%;
        text-align: center;
        flex-direction: row-reverse;
      }
      a {
        text-decoration: none;
        ${textColor};
      }
      p {
        padding-top: 16px;
        margin: 0 0 0 16px;
      }
  `;

    // Render the UI as a function of component state
    render() {
        return html`
            <p>Nouveau Printemps</p>
            <nav>
                <a href="/">Accueil</a>
                <a href="/">Accueil</a>
            </nav>
        `;
    }
}

declare global {
    interface HTMLElementRootNavbar {
        "r-navbar": RootNavbar;
    }
}
