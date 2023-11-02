import { customElement } from "lit/decorators.js";
import {css, CSSResultGroup, html, LitElement} from "lit";

import './Navbar.ts'

@customElement('r-header')
export class RootHeader extends LitElement {
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
      video {
        position: absolute;
        ${RootHeader.video()};
        ${RootHeader.place()}
      }
      r-navbar {
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
            console.log("here", -(9*w/16-h)/2)
            return css`top: ${-((9*w/16)-h)/2}px;left: 0`
        }
        // width is cropped
        console.log("noo")
        return css`left: ${-(16*h/9-w)/2}px;top: 0;`
    }

    // Render the UI as a function of component state
    render() {
        return html`
            <header>
                <r-navbar></r-navbar>
                <div class="container">
                    <video autoplay muted loop>
                        <source src="/videos/placeholder.mp4">
                    </video>
                </div>
            </header>
        `;
    }
}

declare global {
    interface HTMLElementRootHeader {
        "r-header": RootHeader;
    }
}
