import {Component} from "../Component.ts";
import {customElement} from "lit/decorators.js";
import {html} from "lit";

import '../global/Header.ts'

@customElement("rejoin-page")
export class NousRejoindre extends Component {
    render() {
        return html`
            <g-header></g-header>
        `
    }
}