import { customElement } from "lit/decorators.js";
import {html} from "lit";
import {Component} from "../Component.ts";

import '../root/Header.ts'
import '../root/Demands.ts'
import '../root/About.ts'
import '../global/Footer.ts'

@customElement('r-page')
export class Root extends Component {
    render() {
        return html`
            <r-header></r-header>
            <r-demands></r-demands>
            <r-about src="https://placehold.co/250x250" alt="Placeholder">
                Révolté par l'inaction politique, nous sommes un groupe de jeunes qui ont décidés de reprendre leur futur
                en main.  <br> <br>
                Nouveau Printemps se place dans la continuité des nombreux groupes d'activistes écologistes, mais étend 
                la lutte aux questions sociales, économiques et démocratiques.
            </r-about>
            <g-footer></g-footer>
        `;
    }
}

declare global {
    interface HTMLElementRoot {
        "r-page": Root;
    }
}