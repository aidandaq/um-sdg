import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";



export class umSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "um-sdg";
  }
//sets constructor values
  constructor() {
    super();
    this.goal = ""; 
    this.imgSrc = new URL('../lib/svgs/g1.svg', import.meta.url).href;
    this.width = "254px";
    this.height = "254px";
    this.label = "Sustainable developments logo";
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.isImgVisible = "true";


    this.setGoalFromAttribute();

    this.switchGoal(); // switch goal based on the attribute

  }
  

  setGoalFromAttribute() {
    //Get the value of the goal attribute value in HTML
    const goalAttribute = this.getAttribute('goal');

    if (goalAttribute) {
      this.goal = goalAttribute;
    }
  }

  switchGoal() { //sets SVG for each goal
    switch (this.goal) {
      case "all":
        this.imgSrc = new URL('../lib/svgs/all.svg', import.meta.url).href;
        break;
      case "circle":
        this.imgSrc = new URL('../lib/svgs/circle.svg', import.meta.url).href;
        break;
      case "g1":
        this.imgSrc = new URL('../lib/svgs/g1.svg', import.meta.url).href;
        break;
      case "g2":
        this.imgSrc = new URL('../lib/svgs/g2.svg', import.meta.url).href;
        break; 
      case "g3":
        this.imgSrc = new URL('../lib/svgs/g3.svg', import.meta.url).href;
        break;  
      case "g4":
        this.imgSrc = new URL('../lib/svgs/g4.svg', import.meta.url).href;
        break; 
      case "g5":
        this.imgSrc = new URL('../lib/svgs/g5.svg', import.meta.url).href;
        break; 
      case "g6":
        this.imgSrc = new URL('../lib/svgs/g6.svg', import.meta.url).href;
        break; 
      case "g7":
        this.imgSrc = new URL('../lib/svgs/g7.svg', import.meta.url).href;
        break; 
      case "g8":
        this.imgSrc = new URL('../lib/svgs/g8.svg', import.meta.url).href;
        break; 
      case "g9":
        this.imgSrc = new URL('../lib/svgs/g9.svg', import.meta.url).href;
        break; 
      case "g10":
        this.imgSrc = new URL('../lib/svgs/g10.svg', import.meta.url).href;
        break; 
      case "g11":
        this.imgSrc = new URL('../lib/svgs/g11.svg', import.meta.url).href;
        break; 
      case "g12":
        this.imgSrc = new URL('../lib/svgs/g12.svg', import.meta.url).href;
        break; 
      case "g13":
        this.imgSrc = new URL('../lib/svgs/g13.svg', import.meta.url).href;
        break; 
      case "g14":
        this.imgSrc = new URL('../lib/svgs/g14.svg', import.meta.url).href;
        break; 
      case "g15":
        this.imgSrc = new URL('../lib/svgs/g15.svg', import.meta.url).href;
        break; 
      case "g16":
        this.imgSrc = new URL('../lib/svgs/g16.svg', import.meta.url).href;
        break; 
      case "g17":
        this.imgSrc = new URL('../lib/svgs/g17.svg', import.meta.url).href;
        break; 
      default: 
        this.imgSrc = new URL('../lib/svgs/circle.svg', import.meta.url).href;
    }
  }

  static get properties() {
    return {  //sets type of each property
      goal: { type: String, reflect: true },
      imgSrc: { type: String },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: Boolean },
      isImgVisible: { type: String },
    };
  }

  static get styles() { //given style sets
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

  render() { //unfinished, defined to render either SVG or colored square
    if (this.colorOnly) {
      return this.renderSquare();
    } else{
      return this.renderSVG();
    }
  }

  renderSquare() { //unfinished, created to render the colored squares
   return html`

   `;
  }

  renderSVG() { //sets loading, fetch priority, and makes SVG visible
    return html`
<div class="svg-wrapper">
  <img 
    class="${this.isImgVisible ? '' : 'hidden'}"
    src="${this.imgSrc}"
    alt="${this.label}"
    loading="lazy"
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

