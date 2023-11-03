import {Component} from "../Component.ts";
import {customElement} from "lit/decorators.js";
import {html} from "lit";

import '../global/Header.ts'
import '../global/Footer.ts'
import '../global/Paragraph.ts'

@customElement("rejoin-page")
export class NousRejoindre extends Component {
    render() {
        return html`
            <g-header></g-header>
            <g-paragraph title="Nous ne sommes pas une organisation classique" color="green">
                <p>
                    Nouveau Printemps n'est ni une association, ni un syndicat, ni une entreprise, ni aucune autre forme
                    légal.
                    Nous sommes uniquement un mouvement né d'une idée. 
                </p>
                <p>
                    Comme nous sommes rien légalement parlant, il n'y a aucune manière officielle de nous rejoindre, et 
                    nous ne comptons pas en créer.
                    Nous cherchons avant tout des personnes qui adhèrent à nos valeurs, à nos idées et à nos revendications.
                </p>
            </g-paragraph>
            <g-paragraph title="Participez à nos actions" color="dark">
                <p>
                    Lorem ipsum 
                </p>
            </g-paragraph>
            <g-footer></g-footer>
        `
    }
}