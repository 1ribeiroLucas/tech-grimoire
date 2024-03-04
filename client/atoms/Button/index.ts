
// https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components/Using_custom_elements
class TGButton extends HTMLElement {
  constructor() {
    super();

    // Creating shadow root 
    this.attachShadow({ mode: "open" });

    // Creating element
    const button = document.createElement("button");
    button.setAttribute("class", "tg-button");
    
    const script = document.createElement("script");
    script.textContent = `
      import "./styles.css"
    `;

    // Attaching the element to the shadow dom.
    this.shadowRoot?.append(button, script);
  }
}

customElements.define('tg-button', TGButton);