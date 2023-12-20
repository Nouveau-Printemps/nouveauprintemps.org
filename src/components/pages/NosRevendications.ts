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
                    L'ensemble de nos revendications s'axe autour d'une thématique globale : <span class="bold">le renouveau des institutions</span>.
                </p>
                <p>
                    Chez Nouveau Printemps, nous souhaitons réellement reconstruire le monde pour le rendre enfin viable.
                    Si vous êtes en accord avec nos principes et revendications, n'hésitez pas à
                    <a href="/nous-rejoindre">nous rejoindre</a>.
                </p>
                <p>
                    Ces revendications ne sont pas triées par importance : on était obligé de le faire pour
                    les présenter correctement.
                </p>
            </g-paragraph>
            <g-paragraph title="Renouveau démocratique" color="white" img="/img/we-demand-justice-tiny.webp" 
                         alt="We Demand Justice + Change - Unsplash">
                <p>
                    Le gouvernement, les élu⋅es et les entreprises doivent reconnaître l'importance d'avoir un mode de
                    fonctionnement transparent. Il s'agit de l'unique manière de garantir nos droits et libertés tout en
                    contrôlant ces groupements.
                </p>
                <p>
                    Ils et elles doivent reconnaître deux nouveaux pouvoirs : les pouvoirs médiatique et économique.
                </p>
                <p>
                    Ils et elles doivent accepter de changer de régime politique pour un plus adapté à la situation 
                    actuelle. Ce changement aura comme objectif de remettre le citoyen au centre des actions en l'écoutant
                    et en le considérant beaucoup plus.
                </p>
            </g-paragraph>
            <g-paragraph title="Lutte écologique" color="green" img="/img/climate-justice-now-tiny.webp" 
                         alt="Climate Justice Now - Unsplash">
                <p>
                    Le gouvernement, les élu⋅es et les entreprises doivent reconnaître l'enjeu climatique planétaire.
                </p>
                <p>
                    Ils et elles doivent reconnaître leur rôle à jouer dans cette crise et ainsi mettre en place des actions
                    fortes pour lutter activement contre. 
                </p>
                <p>
                    Ils et elles doivent informer la population avec transparence sur la gravité de la situation. 
                </p>
                <p>
                    Ils et elles doivent condamner l'ensemble des actions allant contre cette lutte.
                </p>
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
