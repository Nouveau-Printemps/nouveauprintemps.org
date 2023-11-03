import { customElement } from "lit/decorators.js";
import {css, html} from "lit";
import {textColor} from "../statics.ts";
import {Component} from "../Component.ts";

@customElement('g-navbar')
export class GlobalNavbar extends Component {
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
        margin: 0 10% 0 auto;
        padding-top: 16px;
        display: flex;
        gap: 32px;
        width: 70%;
        text-align: center;
        flex-direction: row;
        justify-content: right;
      }
      a {
        text-decoration: none;
        ${textColor};
      }
      img {
        padding-top: 16px;
        margin: 0 0 0 10%;
      }
  `;

    // Render the UI as a function of component state
    render() {
        return html`
            <img src="https://placehold.co/150x50" alt="Logo">
            <nav>
                <a href="/">Accueil</a>
                <a href="/nos-revendications">Nos Revendications</a>
                <a href="/nous-rejoindre">Nous Rejoindre</a>
            </nav>
        `;
    }
}

declare global {
    interface HTMLElementRootNavbar {
        "r-navbar": GlobalNavbar;
    }
}
