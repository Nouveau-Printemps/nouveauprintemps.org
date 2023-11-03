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
            <g-header title="Nos Revendications">
            </g-header>
            <g-paragraph title="Présentation" color="dark">
                <p>
                    L'ensemble de nos revendications s'axe autour d'une thématique global : <br> 
                    <span class="bold">le renouveau des institutions</span>.
                </p>
                <p>
                    Chez Nouveau Printemps, nous souhaitons réellement reconstruire le monde pour le rendre enfin viable.
                    Si vous êtes en accord avec nos principes et nos revendications, n'hésitez pas à
                    <a href="/nous-rejoindre">nous rejoindre</a>.
                </p>
                <p>
                    Attention, ces revendications ne sont pas triées par importance : on était obligé de les trier pour
                    les présenter correctement.
                </p>
            </g-paragraph>
            <g-paragraph title="Renouveau démocratique" color="white">
                <p>
                    Nous demandons à l'État français de :
                </p>
                <ul>
                    <li>devenir intégralement transparent ;</li>
                    <li>changer de régime politique ;</li>
                    <li>réformer entièrement l'institution judiciaire.</li>
                </ul>
                <p>
                    La transparence est essentielle si on souhaite garder un contrôle sur l'État.
                    Cette transparence permettra de mieux comprendre son fonctionnement en allant des dépenses de l'Élysée,
                    à la présence des élus lors des votes.
                </p>
                <p>
                    Le changement de régime politique est nécessaire si on souhaite réinsuffler un vent de démocratie.
                    Il est évident que notre système démocratique ne fonctionne plus : plus de 70% des français étaient 
                    contre la réforme des retraites qui a été passée en force, les assemblés ne possèdent pas le pouvoir
                    de bloquer le gouvernement alors que ce pouvoir est essentiel en démocratie.
                </p>
                <p>
                    Actuellement l'institution judiciaire provoque de nombreux torts : violences policiaires à répétitions,
                    racisme, sexisme et homophobie omniprésente au sein de la police, trop de plaintes jamais ou mal traités
                    par manque de temps, et on en passe.
                    Selon nous, l'unique manière de régler ces problèmes serait de la réformer intégralement pour repartir
                    sur une base saine.
                </p>
            </g-paragraph>
            <g-paragraph title="Lutte écologique" color="green">
                <p>
                    La crise écologique est évidente et il est criminel de ne pas lutter contre. Nous demandons donc de
                    lutter activement contre :
                </p>
                <ul>
                    <li>le changement climatique ;</li>
                    <li>l'exploitation des ressources.</li>
                </ul>
                <p>
                    Le GIEC a affirmé dans la conclusion de son rapport de 2023 que "[jusqu'à 75% de la population mondiale
                    va disparaître entre aujourd'hui et 2100 suite au changement climatique]".
                    Ne pas lutter activement contre, c'est être complice de plus de 5 milliards de mort futur.
                </p>
                <p>
                    L'eau est une ressource rare qui est essentielle à la vie. Malheureusement on la gaspille et on la 
                    pollue. Sans eau, la vie n'existe plus. Il est primordial de la préserver. 
                </p>
            </g-paragraph>
            <g-paragraph title="Renouveau social et économique" color="white">
                <p>
                    Changer le système par un respectant plus l'humain ne peut se faire sans changer aussi le fonctionnement
                    de l'économie et du social.
                    Ainsi nous demandons d'en :
                </p>
                <ul>
                    <li>finir avec le tout individuel ;</li>
                    <li>finir avec la recherche du profit ;</li>
                    <li>changer les moyens de transport ;</li>
                    <li>finir avec les inégalités économiques ;</li>
                    <li>finir avec l'exploitation des travailleurs ;</li>
                    <li>finir avec les aliénations liés au capitalisme ;</li>
                    <li>changer les circuits de production et de consommation.</li>
                </ul>
                <p>
                    
                </p>
                <p>
                    
                </p>
                <p>
                    
                </p>
                <p>
                    
                </p>
                <p>
                    
                </p>
                <p>
                    
                </p>
                <p>
                    
                </p>
            </g-paragraph>
            <simple-button href="/nous-rejoindre" light="true">Rejoignez nous</simple-button>
            <g-footer color="dark"></g-footer>
        `
    }
}