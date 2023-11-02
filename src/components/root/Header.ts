import { customElement, property } from "lit/decorators.js";
import {css, html, LitElement} from "lit";

@customElement('r-header')
export class RootHeader extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    :host {
      
    }
  `;

    // Declare reactive properties
    @property()
    name?: string = 'World';

    // Render the UI as a function of component state
    render() {
        return html`
            <header class="w-full h-full bg-black">
                
            </header>
        `;
    }
}

declare global {
    interface HTMLElementRootHeader {
        "r-header": RootHeader;
    }
}
