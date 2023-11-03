import {Component} from "../Component.ts";
import {css, html} from "lit";
import {customElement, property} from "lit/decorators.js";

import "../global/Navbar.ts"

@customElement('g-header')
export class GlobalHeader extends Component {
    static styles = css`
      g-navbar {
        background: var(--color-dark);
      }
    `

    @property({type: String})
    image = "https://placehold.co/1920x600"
    @property({type: String})
    title = ""

    render() {
        return html`
            <header>
                <g-navbar></g-navbar>
                <head-container image=${this.image} title=${this.title}></head-container>
            </header>
        `
    }
}

@customElement("head-container")
// @ts-ignore
class Container extends Component {
    static styles = css`
      :host {
        display: block;
        background: var(--color-green) center no-repeat;
        padding: 15%;
      }
      h1 {
        font-weight: 600;
        margin: 5% 0;
      }
    `
    @property({type: String})
    image = ""
    @property({type: String})
    title = ""

    render() {
        this.style.backgroundImage = `url("${this.image}")`
        return html`
            <h1>${this.title}</h1>
        `
    }
}