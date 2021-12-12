class Loader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

    this.innerHTML = `
      <div class="progress-1" >
      <div class="indeterminate" />
      </div >
          `;

    }
}

customElements.define('loader-component', Loader);