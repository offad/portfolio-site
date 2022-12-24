//Borrowed from https://stackoverflow.com/q/21765592

// Account & API Account Information
$user = "offad"; // <---- Your username goes here
$key = "30e1c04cb4b327312b02674b79cd7578"; //<-- Your API key goes here

// The URL of the request to API Service
$url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=$user&api_key=$key&format=json";

// Enable Shortening
$short_titles = false;


class Music extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
            <div class="now-playing"></div>
        `;
    }
}
  
customElements.define('music-component', Music);

//Borrowed from https://stackoverflow.com/q/21765592
get_spotify() {
    $.ajax({
        type: 'POST',
        url: 'assets/last.fm.php',
        data: { request: 'true' },
        success: function(reply) {
            $('.now-playing').html("<p>" + reply + "</p>");
        }
    });
}
    
window.onload = get_spotify;