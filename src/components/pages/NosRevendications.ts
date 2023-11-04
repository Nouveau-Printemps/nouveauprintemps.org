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
                    Il est évident que notre système démocratique ne fonctionne plus : plus de 70% des Français étaient 
                    contre la réforme des retraites qui a été passée en force, les assemblées ne possèdent pas le pouvoir
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
                    Ne pas lutter activement contre, c'est être complice de plus de 5 milliards de morts futurs.
                </p>
                <p>
                    L'eau est une ressource rare qui est essentielle à la vie. Malheureusement, on la gaspille et on la 
                    pollue. Sans eau, la vie n'existe plus. Il est primordial de la préserver. 
                </p>
            </g-paragraph>
            <g-paragraph title="Renouveau social et économique" color="white">
                <p>
                    Changer le système par un respectant plus l'humain ne peut se faire sans changer aussi le fonctionnement
                    de l'économie et du social.
                    Ainsi, nous demandons d'en :
                </p>
                <ul>
                    <li>finir avec le tout individuel ;</li>
                    <li>finir avec la recherche du profit ;</li>
                    <li>changer les moyens de transport ;</li>
                    <li>finir avec les inégalités économiques ;</li>
                    <li>changer les circuits de production et de consommation.</li>
                </ul>
                <p>
                    Le tout individuelle place la propriété individuelle comme objectif de vie : posséder une maison, une
                    cuisine dernier cri, une grosse voiture de sport, etc.
                    Cet objectif a pour principale conséquence de favoriser la surconsommation : tout le monde doit avoir
                    une voiture alors, qu'en moyenne, elle reste 96% du temps à l'arrêt.
                    En luttant contre, on réduit l'exploitation inutile des ressources tout en réduisant le coût d'utilisation.
                </p>
                <p>
                    La recherche absolue du profit est provoquée par l'objectif final de posséder l'argent.
                    Or, cette recherche écarte l'humain de l'équation : pourquoi devrais-je prendre en compte la vie du 
                    travailleur, si cela revient à réduire mon profit, et donc à m'éloigner de mon objectif ?
                    Pourquoi devrais-je lutter pour l'écologie si je n'en tire rien ?
                </p>
                <p>
                    Pour lutter activement contre le désastre écologique, il est important de revoir l'intégralité du 
                    fonctionnement de nos transports.
                    Comme expliquer plus haut, la voiture individuelle est un désastre écologique : il est donc nécessaire
                    de s'en séparer.
                    Mais pour y parvenir, il est nécessaire de renforcer les autres moyens de transport si on ne souhaite
                    pas perdre en mobilité.
                </p>
                <p>
                    La moralité d'un acte ne dépend pas de la chance : conduire saoul est immoral peu importe ses conséquences.
                    Il serait donc immoral de rémunérer quelqu'un en fonction de ses talents qui ne sont liés ni au mérite
                    ou ni au travail de la personne, mais à sa chance.
                </p>
                <p>
                    Un circuit de production et de consommation plus court va nécessairement augmenter la qualité de vie
                    des consommateurs et producteurs, en plus de lutter activement contre les émissions de gaz à effet de 
                    serre.
                    Un circuit plus court favorise des produits locaux, bien souvent de meilleurs de qualité.
                    De plus, la mise en place de ce type de circuit permet de réduire le nombre d'intermédiaires, et donc
                    de réduire les coûts pour le consommateur tout en augmentant les bénéfices du producteur.
                </p>
            </g-paragraph>
            <simple-button href="/nous-rejoindre" light="true">Rejoignez nous</simple-button>
            <g-footer color="dark"></g-footer>
        `
    }
}