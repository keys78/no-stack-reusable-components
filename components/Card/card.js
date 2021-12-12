class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const content = this.innerHTML

        this.innerHTML = `
      <div class="card">${content}
      </div >
          `;

    }
}

customElements.define('card-component', Card);