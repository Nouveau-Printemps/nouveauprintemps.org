import {Component} from "../Component.ts";
import {css, html} from "lit";
import {customElement} from "lit/decorators.js";

import "../global/Navbar.ts"

@customElement('g-header')
export class GlobalHeader extends Component {
    static styles = css`
      g-navbar {
        background: var(--color-dark);
      }
      .container {
        background: var(--color-green) url("https://placehold.co/1920x600") center no-repeat;
        padding: 10%;
      }
      h1 {
        font-weight: 600;
        margin: 5% 0;
      }
    `
    render() {
        return html`
            <header>
                <g-navbar></g-navbar>
                <div class="container">
                    <h1>Nous Rejoindre</h1>
                </div>
            </header>
        `
    }
}