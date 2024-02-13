import {customElement} from "lit/decorators.js";
import {Component} from "../Component.ts";
import {css, html} from "lit";

import '../global/Header.ts'
import '../global/Footer.ts'
import '../global/Paragraph.ts'
import '../global/Button.ts'

@customElement("demands-page")
export class NosRevendications extends Component {
    static styles = css`
      simple-button {
        display: block;
        margin-bottom: 10%;
      }
    `
    render() {
        return html`
            <g-header title="Nos Revendications" img="/img/snowdrop.webp">
            </g-header>
            <g-paragraph title="Présentation" color="dark">
                <p>
                    L'ensemble de nos revendications s'axe autour d'une thématique globale : 
                    <span class="bold">le renouveau des institutions</span>.
                </p>
            </g-paragraph>
            <g-paragraph title="Renouveau démocratique" color="white" img="/img/we-demand-justice-tiny.webp" 
                         alt="We Demand Justice + Change - Unsplash">
                <p>
                    Toutes actions de l'État (gouvernement, assemblés, Justice) doivent être rendus publiques et facilement
                    accessibles.
                </p>
                <p class="is-important">
                    L'ensemble des mandats politiques doivent devenir unique.
                </p>
                <p>
                    Ajout dans la Constitution de deux autres formes de pouvoir : le pouvoir économique et le pouvoir 
                    médiatique. 
                </p>
                <p>
                    Ajout du Référendum d'Initiative Citoyenne (RIC) dans la Constitution.
                </p>
                <p>
                    Créer un droit permettant à n'importe quel citoyen de prendre rendez-vous avec son député.
                </p>
                <p>
                    Créer un droit permettant à n'importe quel citoyen de lancer un référendum dans sa
                    circonscription. Le résultat de ce référendum devra être suivi par le député.
                </p>
                <p>
                    Ne plus reposer les services publics sur des entreprises privées.
                </p>
                <p>
                    Enlever l'obligation de libéraliser dans la Constitution européenne.
                </p>
            </g-paragraph>
            <g-paragraph title="Lutte écologique" color="green" img="/img/climate-justice-now-tiny.webp" 
                         alt="Climate Justice Now - Unsplash">
                <p>
                    La Cour Internationale de Justice doit condamner pour crime contre l'humanité l'ensemble des personnes
                    morales ou physiques ayant empêché à grande échelle l'établissement du consensus. 
                </p>
            </g-paragraph>
            <g-paragraph title="Renouveau social et économique" color="white" img="/img/no-justice-no-peace-tiny.webp" 
                         alt="No Justice No Peace - Unsplash">
                <p>
                    Le gouvernement, les élu⋅es et les entreprises doivent reconnaître que le tout individuel empêche
                    toute évolution sociétale.
                </p>
                <p>
                    Ils et elles doivent arrêter de rechercher le profit à tout prix. 
                </p>
                <p>
                    Ils et elles doivent reconnaître que toute vie humaine a droit au confort, peu importe ses origines,
                    son revenu et sa culture. Et ils et elles doivent reconnaître qu'il est injuste d'imposer une vie à
                    un humain en fonction de critère qu'il ne peut influer (classe sociale d'origine, couleur de peau, 
                    etc.).
                </p>
                <p>
                    Ils et elles doivent rémunérer non plus exclusivement en fonction des compétences, mais doivent aussi
                    prendre en compte la pénibilité et l'importance du travail.
                </p>
            </g-paragraph>
            <simple-button href="/nous-rejoindre" light>Rejoignez nous</simple-button>
            <g-footer color="dark"></g-footer>
        `
    }
}
