import {customElement} from "lit/decorators.js";
import {Component} from "../Component.ts";
import {html} from "lit";

@customElement("legals-page")
export class MentionsLegales extends Component {
    render() {
        return html`
            <g-header title="Mentions Légales">
            </g-header>
            <g-paragraph title="Mentions Légales" color="white">
                <p>
                    Tous les sites webs présent sur un sous-domaine de nouveauprintemps.org (e.g. blog.nouveauprintemps.org,
                    www.nouveauprintemps.org) ("sites") suivent ces mentions légales.
                </p>
            </g-paragraph>
            <g-paragraph title="Propriété" color="white">
                <p>
                    Le propriétaire de ces sites est M. WILLIAM HERGÈS.
                </p>
                <p>
                    Le contenu des sites est protégé par la licence CC-BY-SA 4.0, sauf mention contraire. <br>
                    Le code source des sites est protégé par la licence AGPL-3.0-or-later, sauf mention contraire.
                </p>
            </g-paragraph>
            <g-paragraph title="Hébergement" color="white">
                <p>
                    L'hébergement de ces sites webs est assuré par :
                </p>
                <ul>
                    <li>Contabo GmbH</li>
                </ul>
                <p>
                    Le propriétaire et l'hébergeur du site ne pourront être tenu comme responsable si le site ne s'aurait
                    être accessible.
                </p>
            </g-paragraph>
            <g-paragraph title="Vie privée" color="white">
                <p>
                    Les cookies utilisés par nos sites sont obligatoires : ils servent uniquement au bon fonctionnement 
                    et non au tracking, à la publicité ciblée ou toute autre utilisation n'altérant pas la fonctionnalité 
                    du site.
                </p>
                <p>
                    Nous récupérons uniquement votre adresse IP que nous stockons pendant 1 an pour des raisons légales. <br>
                    Nous utilisons aussi l'outil de statistique de CloudFlare, Inc (
                    <a href="https://www.cloudflare.com/en-en/privacypolicy/" target="_blank">politique de confidentialité</a>)
                    qui n'est pas désactivable puisqu'il n'identifie pas l'utilisateur.
                </p>
            </g-paragraph>
            <g-footer color="green"></g-footer>
        `
    }
}