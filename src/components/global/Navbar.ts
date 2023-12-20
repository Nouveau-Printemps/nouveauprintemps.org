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
        padding: 16px 0;
        height: 50px;
      }
      nav {
        //margin: 0 10% 0 auto;
        display: grid;
        width: 100%;
        grid: auto-flow dense / 1fr 1fr 1fr;
        text-align: center;
        justify-content: right;
        align-items: center;
      }
      #hamburger {
          display: none;
          flex-direction: column;
          height: 26px;
          width: 32px;
          cursor: pointer;
          margin-left: 10%;
          justify-content: space-between;
      }
      #hamburger span {
          display: block;
          height: 4px;
          width: 100%;
          border-radius: 10px;
          background: var(--color-light);
          transition: .3s ease-in-out;
      }
      #hamburger span:nth-child(1) {
          transform-origin: 0 0 0;
      }
      #hamburger span:nth-child(2) {
          transition: .2s ease-in-out;
      }
      #hamburger span:nth-child(3) {
          transform-origin: 0 100%;
      }
      #hamburger.is-enabled span:nth-child(1) {
          transform: rotate(45deg);
      }
      #hamburger.is-enabled span:nth-child(2) {
          opacity: 0;
      }
      #hamburger.is-enabled span:nth-child(3) {
          transform: rotate(-45deg);
      }
      a {
        text-decoration: none;
        color: var(--color-light)
      }
      a:hover {
          font-weight: bold;
      }
      img {
        margin: 0 0 0 10%;
      }
        @media only screen and (max-width: 970px) {
            #hamburger {
                display: flex;
            }
            nav {
                opacity: 0;
                position: absolute;
                top: calc(-100% + 50px + 2*16px);
            }
            #hamburger.is-enabled ~ nav {
                display: flex;
                top: calc(50px + 2*16px);
                flex-direction: column;
                margin: 0 auto 0 auto;
                justify-content: center;
                width: 100%;
                height: calc(100% - 50px - 2*16px);
                background: var(--color-green);
                gap: 10%;
                opacity: 1;
                transition: opacity .2s ease-in;
            }
            #hamburger.is-enabled ~ nav a {
                color: var(--color-dark);
            }
            img {
                margin: 0 10% 0 auto;
            }
        }
  `;

    // Render the UI as a function of component state
    render() {
        return html`
            <div id="hamburger" @click="${this.hamburger}">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src="https://placehold.co/150x50" alt="Logo">
            <nav>
                <a href="/">Accueil</a>
                <a href="/nos-revendications">Nos Revendications</a>
                <a href="/nous-rejoindre">Nous Rejoindre</a>
            </nav>
        `;
    }

    hamburger(e: Event) {
        const hamburger = e.currentTarget as HTMLDivElement
        e.preventDefault()
        hamburger.classList.toggle('is-enabled')
    }
}

declare global {
    interface HTMLElementRootNavbar {
        "r-navbar": GlobalNavbar;
    }
}
