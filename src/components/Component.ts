import {CSSResultGroup, LitElement, css} from "lit";
import {textColor} from "./statics.ts";

export abstract class Component extends LitElement {
    private static _styles: CSSResultGroup;

    static get styles(): CSSResultGroup {
        const derivedStyles = this._styles || [];
        return [
            resetCSS,
            globalCSS,
            ...(Array.isArray(derivedStyles) ? derivedStyles : [derivedStyles]),
        ];
    }

    static set styles(styles: CSSResultGroup) {
        this._styles = styles;
    }
}

const globalCSS = css`
  @font-face {
    font-family: 'Abril';
    font-weight: 400;
    src: url("/fonts/abril/AbrilFatface-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 100;
    src: url("/fonts/lato/Lato-Thin.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 100;
    font-style: italic;
    src: url("/fonts/lato/Lato-ThinItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 300;
    src: url("/fonts/lato/Lato-Light.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 300;
    font-style: italic;
    src: url("/fonts/lato/Lato-LightItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    src: url("/fonts/lato/Lato-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    font-style: italic;
    src: url("/fonts/lato/Lato-Italic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    src: url("/fonts/lato/Lato-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    font-style: italic;
    src: url("/fonts/lato/Lato-BoldItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 900;
    src: url("/fonts/lato/Lato-Black.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Lato';
    font-weight: 900;
    font-style: italic;
    src: url("/fonts/lato/Lato-BlackItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 100;
    src: url("/fonts/raleway/Raleway-Thin.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 100;
    font-style: italic;
    src: url("/fonts/raleway/Raleway-ThinItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 300;
    font-style: italic;
    src: url("/fonts/raleway/Raleway-LightItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 300;
    src: url("/fonts/raleway/Raleway-Light.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 400;
    src: url("/fonts/raleway/Raleway-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 400;
    font-style: italic;
    src: url("/fonts/raleway/Raleway-Italic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 700;
    font-style: italic;
    src: url("/fonts/raleway/Raleway-BoldItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 700;
    src: url("/fonts/raleway/Raleway-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 900;
    src: url("/fonts/raleway/Raleway-Black.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 900;
    font-style: italic;
    src: url("/fonts/raleway/Raleway-BlackItalic.ttf") format("truetype");
  }

  * {
    --color-light: rgba(255, 255, 255, 0.8);
    --color-green: #c2e1c1;
    --color-dark: #242333;
  }

  body {
    font-family: 'Lato', sans-serif;
    ${textColor};
  }
  
  p {
    font-size: 1.2em;
  }

  a {
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 2em;
  }
`

const resetCSS = css`
  /* https://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`