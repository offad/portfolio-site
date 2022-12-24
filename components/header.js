class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
            <header class="header">

                <h1>Oluwanifemi Fadare</h2>

                <a href="#">Resume</a>

                <!-- Add font awesome icons -->
                <a href="mailto:of.fadare@gmail.com" class="fa fa-envelope"></a>
                <a href="https://github.com/offad" class="fa fa-github"></a>
                <a href="https://www.instagram.com/of.fad/" class="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/in/offad/" class="fa fa-linkedin"></a>  
                
            </header>   
        `;
    }
}
  
customElements.define('header-component', Header);