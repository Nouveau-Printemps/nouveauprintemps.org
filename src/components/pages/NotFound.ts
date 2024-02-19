import { Component } from "../Component.ts";
import { customElement } from "lit/decorators.js";
import { html } from "lit";

import "../global/Header.ts";
import "../global/Footer.ts";
import "../global/Paragraph.ts";

@customElement("not-found")
export class NotFound extends Component {
  private links = new Map<string, string>()
    .set("Réseaux", "/reseaux")
    .set("Nous Rejoindre", "/nous-rejoindre")
    .set("Accueil", "/")
    .set("Blog", "https://blog.")
    .set("Nos Revendications", "/nos-revendications");
  private randomLink() {
    const r = Math.floor(Math.random() * this.links.size);
    let i = 0;
    let name,
      target = "";
    this.links.forEach((v, k) => {
      if (r === i) {
        name = k;
        target = v;
      }
      i++;
    });
    return html`<a
      href="${target}"
      target=${target.startsWith("https://") ? "_blank" : "_self"}
      >${name}</a
    >`;
  }

  render() {
    return html`
      <g-header title="Oh non, un 404" img="/img/lost-fog.webp"></g-header>
      <g-paragraph title="Vous vous êtes perdu·e·s ?">
        <p>Vous cherchiez peut-être la page ${this.randomLink()} ?</p>
      </g-paragraph>
      <g-footer></g-footer>
    `;
  }
}
