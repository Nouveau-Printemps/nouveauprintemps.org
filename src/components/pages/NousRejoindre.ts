import {Component} from "../Component.ts";
import {customElement} from "lit/decorators.js";
import {css, html} from "lit";

import '../global/Header.ts'
import '../global/Footer.ts'
import '../global/Paragraph.ts'
import '../global/Button.ts'

@customElement("rejoin-page")
export class NousRejoindre extends Component {
    static styles = css`
      simple-button {
        display: block;
        margin-bottom: 10%;
      }
    `
    render() {
        return html`
            <g-header title="Nous Rejoindre" img="/img/clouds.webp"></g-header>
            <g-paragraph title="Nous ne sommes pas une organisation classique" color="dark">
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
            <g-paragraph title="Participez à nos actions" color="green">
                <p>
                    Si vous croyez en nos revendications et que vous souhaitez améliorer notre monde, hésitez pas à participer
                    à nos actions.
                </p>
                <p>
                    N'hésitez pas à nous suivre sur nos <a href="/reseaux">réseaux</a> pour être informé de nos dernières actions.
                </p>
            </g-paragraph>
            <g-paragraph title="Rejoindre l'équipe" color="white">
                <p>
                    Vous souhaitez faire <span class="italic">encore</span> plus ?
                    Alors rejoignez notre équipe !
                </p>
                <p>
                    N'hésitez pas à nous contacter sur n'importe lequel de nos <a href="/reseaux">réseaux</a>.
                    Une seule condition : avoir Discord car, actuellement, il s'agit de la plateforme qui nous regroupe 
                    tous.
                </p>
            </g-paragraph>
            <simple-button href="/reseaux" light>Nos réseaux</simple-button>
            <g-footer color="green"></g-footer>
        `
    }
}
