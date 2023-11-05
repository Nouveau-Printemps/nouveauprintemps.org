import {Component} from "../Component.ts";
import {customElement} from "lit/decorators.js";
import {html} from "lit";

import '../global/Header.ts'
import '../global/Footer.ts'
import '../global/Paragraph.ts'
import '../reseaux/Social.ts'

@customElement("networks-page")
export class Reseaux extends Component {
    render() {
        return html`
            <g-header title="Nos Réseaux" image="https://placehold.co/1920x600"></g-header>
            <re-social plateforme="Discord" color="green">
                <p>
                    Rejoignez Discord !
                </p>
            </re-social>
            <re-social plateforme="Mastodon" color="dark" left>
                <p>
                    Suivez nous sur Mastodon !
                </p>
            </re-social>
            <re-social plateforme="YouTube" color="green">
                <p>
                    Suivez nous sur Mastodon !
                </p>
            </re-social>
            <re-social plateforme="PeerTube" color="dark" left>
                <p>
                    Suivez nous sur Mastodon !
                </p>
            </re-social>
            <g-footer color="light"></g-footer>
        `
    }
}