import {Component} from "../Component.ts";
import {customElement, property} from "lit/decorators.js";
import {css, html} from "lit";

@customElement("g-footer")
export class Footer extends Component {
    static styles = css`
      :host {
        padding: 10%;
        display: block;
      }
      div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10%;
        align-items: center;
        align-content: center;
        justify-content: center;
        text-align: center;
      }
      .dark {
        color: var(--color-light)
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
      .dark a {
        color: var(--color-light)
      }
      p {
        font-size: 1.1em;
      }
    `

    @property({type: String})
    color = "green"

    render() {
        this.style.background = this.genColor(this.color)
        return html`
            <div class=${this.color == "dark" ? "dark" : ""}>
                <img src="https://placehold.co/250x100" alt="Logo">
                <div class="list">
                    <a href="/">Accueil</a>
                    <a href="https://blog." target="_blank" ">Blog</a>
                    <a href="https://www.anhgelus.world/#legal-fr" target="_blank">Mentions Légales</a>
                </div>
                <p>
                    &copy; 2023 - Nouveau Printemps<br>
                    Contenu sous CC-BY-SA 4.0<br>
                    Code source sous AGPLv3
                </p>
            </div>
        `
    }
}