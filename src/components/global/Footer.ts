import {Component} from "../Component.ts";
import {customElement} from "lit/decorators.js";
import {css, html} from "lit";

@customElement("g-footer")
export class Footer extends Component {
    static styles = css`
      :host {
        background: var(--color-green);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10%;
        padding: 10%;
        align-items: center;
        align-content: center;
        justify-content: center;
        text-align: center;
      }
      .list {
        display: flex;
        flex-direction: row;
        gap: 10%;
        justify-content: center;
      }
      a {
        display: block;
        color: var(--color-dark);
        font-size: 1.25em;
      }
    `
    render() {
        return html`
        <img src="https://placehold.co/250x100" alt="Logo">
        <div class="list">
            <a href="/">Accueil</a>
            <a href="https://blog." target="_blank" ">Blog</a>
            <a href="/reseaux">Réseaux</a>
        </div>
        <p>
            &copy; 2023 - Nouveau Printemps<br>
            Contenu sous CC-BY-SA 4.0<br>
            Code source sous AGPLv3
        </p>
        `
    }
}