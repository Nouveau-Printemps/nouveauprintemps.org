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
    img = "https://placehold.co/1920x900"
    @property({type: String})
    title = ""

    render() {
        return html`
            <header>
                <g-navbar></g-navbar>
                <head-container img=${this.img} title=${this.title}></head-container>
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
        background-size: cover;
        padding: 15%;
      }
      h1 {
        font-weight: 600;
        margin: 5% 0;
      }
    `
    @property({type: String})
    img = ""
    @property({type: String})
    title = ""

    render() {
        this.style.backgroundImage = `url("${this.img}")`
        return html`
            <h1>${this.title}</h1>
        `
    }
}