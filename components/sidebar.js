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
                        <a href="html/projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="html/writing.html">Writing</a>
                    </li>
                    <li>
                        <a href="#">Résumé</a>
                    </li>
                </ul>
            </div>

          </aside>   
        `;
    }
}
  
customElements.define('sidebar-component', Sidebar);