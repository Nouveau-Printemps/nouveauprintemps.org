import {Component} from "../Component.ts";
import {customElement} from "lit/decorators.js";
import {html} from "lit";

import '../global/Header.ts'
import '../global/Footer.ts'
import '../global/Paragraph.ts'

@customElement("networks-page")
export class Reseaux extends Component {
    render() {
        return html`
            <g-header title="Nos Réseaux" img="/img/abstract-colors-white.webp"></g-header>
            <g-pib title="Discord" color="green" img="/icons/brands/discord.svg" link="https://discord.gg/TTucdtkRfV">
                <p>
                    Véritable QG numérique, Discord est le lieu où nous sommes tous.
                    On y organise souvent des débats et des réunions publiques pour que quiconque puisse donner son 
                    avis.
                </p>
                <p>
                    Discord est notre réseau le plus important.
                </p>
            </g-pib>
            <g-pib title="Mastodon" color="dark" left img="/icons/brands/mastodon.svg" 
                   link="https://mastodon.social/@nouveauprintemps">
                <p>
                    Mastodon est l'alternative libre de Twitter.
                    Toutes les infos importantes y sont relayées.
                </p>
                <p>
                    Nous avons quitté Twitter, car nous sommes fondamentalement contre la vision qu'Elon Musk a pour ce 
                    réseau. 
                </p>
            </g-pib>
            <g-pib title="YouTube" color="green" img="/icons/brands/youtube.svg">
                <p>
                    YouTube est l'un de deux moyens de diffusion vidéo que nous utilisons.
                    Toutes les vidéos importantes y seront diffusées, même si, certaines fois, elles seront censurées pour
                    éviter de se faire bannir.
                </p>
                <p>
                    Le contenu posté sera essentiellement constitué de présentations, de trailers et de "clip".
                </p>
            </g-pib>
            <g-pib title="PeerTube" color="dark" left img="/icons/brands/peertube.svg">
                <p>
                    Deuxième manière de diffusion vidéo que nous utilisons, PeerTube est l'alternative libre de YouTube.
                    Le principal avantage de PeerTube est l'absence de censure politique nous concernant.
                </p>
                <p>
                    Tout le contenu vidéo que nous produisons sera posté sans censure sur PeerTube.
                </p>
            </g-pib>
            <g-footer color="light"></g-footer>
        `
    }
}
