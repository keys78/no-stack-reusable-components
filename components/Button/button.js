class Button extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const content = this.attributes.content.value
      this.classList = 'btn'
      this.innerText = `${content}
          `;

        if(this.hasAttribute('btn-primary')) {
            this.classList.add('bg-primary')
        }
        if(this.hasAttribute('btn-secondary')) {
            this.classList.add('bg-secondary')
        }
        if(this.hasAttribute('btn-tertiary')) {
            this.classList.add('bg-tertiary')
        }
        if(this.hasAttribute('btn-quatenary')) {
            this.classList.add('bg-quatenary')
        }
        if(this.hasAttribute('br-1')) {
            this.classList.add('br-1')
        }
        if(this.hasAttribute('br-full')) {
            this.classList.add('br-full')
        }
    }
  }
  
  customElements.define('button-component', Button, class extends HTMLElement {'button'});