const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<style>
    .header{
        text-align: center;
    }
    h1{
        color: blue;
    }
</style>

<div>
    <div class="header">
        <h1> Header - My First Blog on Web Component </h1>
        <p>The man asked of what could b ehfeno;jnw duibiudvuobdscbudljsncd sonbdsoboubdos</p>
    </div>
</div>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);