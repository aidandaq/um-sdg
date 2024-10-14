import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";


export class umSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "um-sdg";
  }

  constructor() {
    super();
    this.goal = "circle";
    this.imgSrc = new URL('../lib/svgs/goal-1.svg', import.meta.url).href;
    this.width = "254px";
    this.height = "254px";
    this.label = "Sustainable developments logo";
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = "false";
    this.isImgVisible = "true";
  }

  static get properties() {
    return {
      goal: { type: String },
      imgSrc: { type: String },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: String },
      isImgVisible: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--um-sdg-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  render() {
    return html`
<div class="svg-wrapper">
  <img 
    class="${this.isImgVisible ? '' : 'hidden'}"
    src="${this.imgSrc}"
    alt="${this.label}"
    loading="${this.loading}"
    fetchpriority="${this.fetchPriority}"
    />
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(umSdg.tag, umSdg);

