import { customElement } from "lit/decorators.js";
import {css, CSSResultGroup, html} from "lit";

import '../global/Navbar.ts'
import { textColor } from "../statics.ts";
import {Component} from "../Component.ts";

@customElement('r-header')
export class RootHeader extends Component {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      :host {
        width: 100%;
        height: 100vh;
        background: black;
        display: block;
      }
      .container {
        top: 0;
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .text {
        position: absolute;
        z-index: 2;
        left: 16px;
        bottom: 15%;
      }
      h1 {
        ${textColor};
        text-transform: uppercase;
        margin: 0 0 16px 0;
        padding: 0;
      }
      p {
        margin: 0;
        font-size: 1.5em;
        ${textColor};
      }
      video {
        position: absolute;
        ${RootHeader.video()};
        ${RootHeader.place()}
      }
      g-navbar {
        z-index: 2;
        position: relative;
      }
  `;

    private static video(): CSSResultGroup {
        if (window.innerWidth/window.innerHeight > 16/9) {
            return css`width: 100%`
        }
        return css`height: 100%`
    }

    private static place(): CSSResultGroup {
        const h = window.innerHeight
        const w = window.innerWidth
        const d = 16/9
        if (w/h > d) {
            // height is cropped
            return css`top: ${-((9*w/16)-h)/2}px;left: 0`
        }
        // width is cropped
        return css`left: ${-(16*h/9-w)/2}px;top: 0;`
    }

    // Render the UI as a function of component state
    render() {
        return html`
            <header>
                <g-navbar></g-navbar>
                <div class="container">
                    <video autoplay muted loop>
                        <source src="/videos/placeholder.mp4">
                    </video>
                </div>
                <div class="content">
<!--                    <div class="text">-->
<!--                        <h1>Nouveau Printemps</h1>-->
<!--                        <p>-->
<!--                            Une organisation qui souhaite changer le monde.-->
<!--                        </p>-->
<!--                    </div>-->
                    <scroll-down></scroll-down>
                </div>
            </header>
        `;
    }
}

@customElement("scroll-down")
// @ts-ignore
class ScrollDown extends Component {
    static styles = css`
      img {
        position: absolute;
        z-index: 2;
        right: 10%;
        width: 64px;
        bottom: 15%;
      }
      img:hover {
        cursor: pointer;
      }
    `
    render() {
        return html`<img @click="${this._scroll}" src="/icons/scroll-down.svg" class="scroll" alt="Arrow">`
    }

    private _scroll() {
        window.scroll({
            behavior: "smooth",
            top: window.innerHeight+(1/10)*window.innerHeight
        })
    }
}

declare global {
    interface HTMLElementRootHeader {
        "r-header": RootHeader;
    }
}
