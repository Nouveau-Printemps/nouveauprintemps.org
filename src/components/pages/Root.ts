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
            <g-pib title="Qui sommes-nous ?" color="white" btn="Nous Rejoindre" shadowImage link="/nous-rejoindre">
                <p>
                    Révolté par l'inaction politique, nous sommes un groupe de jeunes qui ont décidé de reprendre leur
                    future en main.
                </p>
                <p>
                    Nouveau Printemps se place dans la continuité des nombreux groupes d'activistes écologistes tout en
                    étendant la lutte aux questions sociales, économiques et démocratiques.
                </p>
            </g-pib>
            <g-footer></g-footer>
        `;
    }

    afterRender() {

    }
}

declare global {
    interface HTMLElementRoot {
        "r-page": Root;
    }
}