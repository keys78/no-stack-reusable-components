class Input extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const label = this.attributes.label.value
    const type = this.attributes.type.value

    this.innerHTML = `
          <div class="input-group">
            <label class="label" for=${label}>${label}</label>
             <input type="${type}"/>
          </div>
        `;
  }
}

customElements.define('input-component', Input);