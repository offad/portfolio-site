class Sidebar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){

        // Define tags
        let aboutTag, projectTag, writingTag, resumeTag, colophoneTag
        let root = "./"

        function defineTags(){

            // Update the hyperlink root

            
            projectTag      = `<a href="${root}pages/projects.html">Projects</a>`;
            writingTag      = `<a href="${root}pages/writing.html">Writing</a>`;
            resumeTag       = `<a href="${root}pages/resume.html">Résumé</a>`;
            colophoneTag    = `<a href="${root}pages/colophone.html">Colophone</a>`;

        }

        // Replace it with the active one

        if (document.title == "Oluwanifemi Fadare") {
            
            aboutTag        = `<a class="active" href="${root}index.html">About</a>`;
            
            defineTags()

        } else { 

            // Change the hyperlink root
            root = "../"
            aboutTag        = `<a href="${root}index.html">About</a>`;

            defineTags()

            // Change the active sidebar element

            if (document.title == "Projects") {
                projectTag      = `<a class="active" href="projects.html">Projects</a>`;
            } else if (document.title == "Writing") {
                writingTag      = `<a class="active" href="writing.html">Writing</a>`;
            } else if (document.title == "Résumé") {
                resumeTag       = `<a class="active" href="resume.html">Résumé</a>`;
            } else if (document.title == "Colophone") {
                colophoneTag    = `<a class="active" href="colophone.html">Colophone</a>`;
            }

        }

        // Change the inner html

        this.innerHTML = `
            <aside class="sidebar">
            <div class = "wrapper">
                <ul>
                    <li>
                        ${aboutTag}
                    </li>
                    <li>
                        ${projectTag}
                    </li>
                    <li>
                        ${writingTag}
                    </li>
                    <li>
                        ${resumeTag}
                    </li>
                    <li>
                        ${colophoneTag}
                    </li>
                </ul>
            </div>

            </aside>   
      `;

    }
}
  
customElements.define('sidebar-component', Sidebar);