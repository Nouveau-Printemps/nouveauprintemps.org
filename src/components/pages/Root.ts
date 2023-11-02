import { customElement } from "lit/decorators.js";
import {html } from "lit";

import '../root/Header.ts'
import '../root/Demands.ts'
import {Component} from "../Component.ts";

@customElement('r-page')
export class Root extends Component {
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