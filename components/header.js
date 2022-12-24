class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
            <header class="header">

                <h1>Oluwanifemi Fadare</h2>

                <!-- Add font awesome icons -->
                
                <ul class="links">
                    <li>
                        <a href="mailto:of.fadare@gmail.com" class="fa fa-envelope"></a>
                    </li>
                    <li>
                        <a href="https://github.com/offad" class="fa fa-github"></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/of.fad/" class="fa fa-instagram"></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/offad/" class="fa fa-linkedin"></a>  
                    </li>
                </ul>
                
            </header>   
        `;
    }
}
  
customElements.define('header-component', Header);