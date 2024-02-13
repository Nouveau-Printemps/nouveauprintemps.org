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
                <p>
                    Mettre en place une police de proximité faisant le lien avec les populations défavorisées.
                </p>
                <p>
                    Créer une assemblée citoyenne à chaque évolution rapide de la société (apparition de l'IA). 
                </p>
            </g-paragraph>
            <g-paragraph title="Lutte écologique" color="green" img="/img/climate-justice-now-tiny.webp" 
                         alt="Climate Justice Now - Unsplash">
                <p>
                    Financer le développement de moyen de transport collectif public (covoiturage, bus, métro, rer, ter,
                    tgv) et taxer les transports individuels (voiture) et les transports polluants (bateau, avion).
                </p>
                <p class="is-important">
                    Créer des centres de réparation dans toutes les villes de plus de 10.000 habitants.
                </p>
                <p>
                    Interdire à la vente tous les produits non réparables.
                </p>
                <p>
                    Taxer proportionnellement le consumérisme.
                </p>
                <p>
                    Limiter progressivement la consommation d'électricité, d'eau et de gaz.
                </p>
                <p>
                    Remplacer les anciens moyens de productions d'énergie (usine à gaz, charbon, pétrole) par de nouveaux
                    moyens plus neutres et renouvelables (solaire, éolien, aquatique). 
                </p>
                <p>
                    Investir dans le développement de nouvelles technologies de stockage et de production.
                </p>
                <p>
                    Continuer d'entretenir nos centrales nucléaires sans en construire de nouvelles.
                </p>
            </g-paragraph>
            <g-paragraph title="Renouveau social et économique" color="white" img="/img/no-justice-no-peace-tiny.webp" 
                         alt="No Justice No Peace - Unsplash">
            </g-paragraph>
            <simple-button href="/nous-rejoindre" light>Rejoignez nous</simple-button>
            <g-footer color="dark"></g-footer>
        `
    }
}
