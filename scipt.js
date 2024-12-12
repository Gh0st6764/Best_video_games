var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Best%20Selling%20Video%20Games.csv";

var platforms = getColumn(url, 3);
var developer = getColumn(url, 5);
var releaseDate = getColumn(url, 4);

function createList(platform, recent, developer){
    document.getElementById('output').innerHTMl = "";
    var matchingGames
    var matchingImages 
}
