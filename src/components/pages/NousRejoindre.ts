import { Component } from "../Component.ts";
import { customElement } from "lit/decorators.js";
import { css, html } from "lit";

import "../global/Header.ts";
import "../global/Footer.ts";
import "../global/Paragraph.ts";
import "../global/Button.ts";

@customElement("rejoin-page")
export class NousRejoindre extends Component {
  static styles = css`
    simple-button {
      display: block;
      margin-bottom: 10%;
    }
  `;
  render() {
    return html`
      <g-header title="Nous Rejoindre" img="/img/clouds.webp"></g-header>
      <g-paragraph
        title="Nous ne sommes pas une organisation classique"
        color="dark"
      >
        <p>
          Nouveau Printemps n'est ni une association, ni un syndicat, ni une
          entreprise, ni aucune autre forme légale.
        </p>
        <p>Nous sommes uniquement un mouvement né d'une idée.</p>
      </g-paragraph>
      <g-paragraph title="Participer à nos actions" color="green">
        <p>
          La manière la plus simple de nous aider est de participer à nos
          actions.
        </p>
        <p>
          Suivez-nous sur nos <a href="/reseaux">réseaux</a> pour que l'on
          puisse vous en informer !
        </p>
      </g-paragraph>
      <g-paragraph title="Rejoindre l'équipe" color="white">
        <p>
          Vous souhaitez faire <span class="italic">encore</span> plus ? Alors,
          rejoignez notre équipe !
        </p>
        <p>
          Contactez-nous sur un de nos <a href="/reseaux">réseaux</a>. Une seule
          condition : avoir Discord.
        </p>
      </g-paragraph>
      <simple-button href="/reseaux" light>Nos réseaux</simple-button>
      <g-footer color="green"></g-footer>
    `;
  }
}
