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
                    Véritable QG numérique, Discord est le lieu où nous sommes tous.
                    On y organise souvent des débats et des réunions publiques pour que quiconque puisse donner son 
                    avis.
                </p>
                <p>
                    Discord est notre réseau le plus important.
                </p>
            </re-social>
            <re-social plateforme="Mastodon" color="dark" left>
                <p>
                    Mastodon est l'alternative libre de Twitter.
                    Toutes les infos importantes y sont relayées.
                </p>
                <p>
                    Nous avons quitté Twitter, car nous sommes fondamentalement contre la vision qu'Elon Musk a pour ce 
                    réseau. 
                </p>
            </re-social>
            <re-social plateforme="YouTube" color="green">
                <p>
                    YouTube est l'une de nos deux plateformes de diffusion vidéo.
                    Toutes les vidéos importantes y seront diffusées, même si, certaines fois, elles seront censurées pour
                    éviter de se faire bannir.
                </p>
                <p>
                    Le contenu posté sera essentiellement constitué de présentations, de trailers et de "clip".
                </p>
            </re-social>
            <re-social plateforme="PeerTube" color="dark" left>
                <p>
                    Deuxième plateforme de diffusion vidéo que nous utilisons, PeerTube est l'alternative libre de YouTube.
                    Le principal avantage de PeerTube est l'absence de censure politique nous concernant.
                </p>
                <p>
                    Tout le contenu vidéo que nous produisons sera posté sans censure sur PeerTube.
                </p>
            </re-social>
            <g-footer color="light"></g-footer>
        `
    }
}