import { customElement } from "lit/decorators.js";
import {html, LitElement} from "lit";

import '../root/Header.ts'
import '../root/Demands.ts'

@customElement('r-page')
export class Root extends LitElement {
    render() {
        return html`
            <r-header></r-header>
            <r-demands></r-demands>
        `;
    }
}

declare global {
    interface HTMLElementRoot {
        "r-page": Root;
    }
}