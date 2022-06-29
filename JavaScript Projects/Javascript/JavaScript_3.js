function displayType(music) {
    var musicType= music.getAttribute("data-music-type");
    alert(musicType + " is a great artist in the " + music.innerHTML + " genre!");
}