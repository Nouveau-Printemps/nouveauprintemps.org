import {CSSResultGroup, LitElement, css} from "lit";
import {whiteColor} from "./statics.ts";

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
  body {
    font-family: 'Lato', sans-serif;
    ${whiteColor};
    font-size: 16px;
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