class Sidebar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
          <aside class="sidebar">
            <div class = "wrapper">
                <ul>
                    <li>
                        <a class="active" href="/">About</a>
                    </li>
                    <li>
                        <a href="pages/projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="pages/writing.html">Writing</a>
                    </li>
                    <li>
                        <a href="#">Résumé</a>
                    </li>
                    <li>
                        <a href="#">Colophone</a>
                    </li>
                </ul>
            </div>

          </aside>   
        `;
    }
}
  
customElements.define('sidebar-component', Sidebar);