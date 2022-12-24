//Borrowed from https://stackoverflow.com/q/21765592
function get_spotify() {
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
