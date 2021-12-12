class Input extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const label = this.attributes.label.value
    const type = this.attributes.type.value
    // const id = this.attributes.id
    // const placeholder = this.attributes.placeholder.value
    // console.log('place', placeholder)

    this.innerHTML = `
          <div class="input-group">
            <label class="label" for=${label}>${label}</label>
             <input type="${type}"/>
          </div>
        `;

        // if(this.hasAttribute('placeholder')) {
        //   return placeholder
        // }

        // if(this.hasAttribute('id')) {
        //   return id
        // }
  }
}

customElements.define('input-component', Input);