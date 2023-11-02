import { customElement, property } from "lit/decorators.js";
import {css, html, LitElement} from "lit";

@customElement('r-header')
export class RootHeader extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    :host {
      color: blue;
    }
  `;

    // Declare reactive properties
    @property()
    name?: string = 'World';

    // Render the UI as a function of component state
    render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }
}

declare global {
    interface HTMLElementRootHeader {
        "r-header": RootHeader;
    }
}
