//Borrowed from https://stackoverflow.com/q/21765592

// Account & API Account Information
const user = "offad"; // <---- Your username goes here
const key = "30e1c04cb4b327312b02674b79cd7578"; //<-- Your API key goes here

// The URL of the request to API Service
var url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${key}&format=json`;

// Enable Shortening
const short_titles = false;

const profile_url = "https://open.spotify.com/user/9jlfvejlr1us1ezja4pnaav4b?si=31ee4ba48d77466a"

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

function sTrim(input){
    let output = input.replace("/- Live/i", "");
    output = input.replace("/- Album Version Explicit/i", "");
    output = input.replace("/- Explicit Album Version/i", "");
    output = input.replace("/- Explicit Version/i", "");
    output = input.replace("/- Album Version/i", "");
    output = input.replace("/\\[(.*?)\]/i", "");
    output = input.replace("/\\((.*?)\)/i", "");
    return output
}

function handleData(data) {

    let res = data.recenttracks.track;

    // Get only the latest track information
    let last = res[0];
    let output = "I have not been listening to anything lately."

    // Is now playing attribute present?
    if (last['@attr'] && last['@attr']['nowplaying']) {

        output = "I am currently listening to " + last['name'] + ' by ' + last['artist']['#text'];

    } else {

        var played = last.date.uts; 
        let now = Date.now() / 1000; // Convert to seconds
        var diff = Math.abs(now - played);

        // Time formatting
        let hours = parseInt(parseInt(diff) / 3600); 
        let minutes = parseInt((diff / 60) % 60);
        let time = "";

        // String formatting based on time
        if (hours > 0)
            if (hours > 24)
                time = "over a day ago";
            else
                time = hours + " hours and " + minutes + " minutes ago";
        else
            time = minutes + " minutes ago";
            
        output = "I last listened to " + last['name'] + ' by ' + last['artist']['#text'] + ` ${time}`;

    }

    output += ` <a href ="${profile_url}">on Spotify</a>.`;
    
    if (short_titles) {
        output = sTrim(output);
    }

    return output;

}

function get_spotify() {
    $.ajax({
        type: 'POST',
        url: url,
        data: { request: 'true' },
        success: function(reply) {
            console.log(reply)
            var result = handleData(reply);
            $('.now-playing').html("<p>" + result + "</p>");
        }
    });
}
    
window.onload = get_spotify;

customElements.define('music-component', Music);