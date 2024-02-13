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
                    Ajouter dans la Constitution que toutes actions de l'État (gouvernement, assemblés, Justice) doivent
                    être rendus publiques et facilement accessibles 24h après l'acte.
                </p>
                <p class="is-important">
                    Ajouter dans la Constitution que les mandats politiques sont uniques.
                </p>
                <p>
                    Ajouter dans la Constitution deux autres formes de pouvoir : le pouvoir économique et le pouvoir 
                    médiatique. 
                </p>
                <p>
                    Ajouter le Référendum d'Initiative Citoyenne (RIC) dans la Constitution.
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
                <p>
                    Limiter la quantité d'argent à 50 millions d'euros par foyer.
                </p>
                <p class="is-important">
                    Adapter les salaires uniquement en fonction de la volonté, de la pénibilité et de la nécessité du
                    travail.
                </p>
                <p>
                    Interdire tout héritage dépassant 10.000€.
                </p>
                <p>
                    Limiter les dividendes à 1 milliard d'euros.
                </p>
                <p>
                    Mettre en place un salaire universel à 85% du salaire médian (environ 1900€) accessible à tous les
                    travailleurs (salarié, professions indépendantes, homme et femme au foyer, etc.) et à tous les
                    malades.
                </p>
                <p>
                    Augmenter le budget de la Santé, rénover les hôpitaux, augmenter les effectifs.
                </p>
                <p>
                    Modifier le fonctionnement des entreprises privées : 50% détenteurs du capital, 50% salariés.
                </p>
            </g-paragraph>
            <simple-button href="/nous-rejoindre" light>Rejoignez nous</simple-button>
            <g-footer color="dark"></g-footer>
        `
    }
}
