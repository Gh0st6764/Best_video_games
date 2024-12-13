var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Best%20Selling%20Video%20Games.csv";

//this links all the columns and lists to variables 
var videoGames = getColumn(url, 1);
var platforms = getColumn(url, 3);
var releaseDate = getColumn(url, 4);
var developer = getColumn(url, 5);


var displayGames = [];

//this is the most important variable, this is the final product. 
//after every input is completed it is added up into matching games
//to be displayed
var matchingGames = [];

/*function createList(platform, recent, developer){
    document.getElementById('output').innerHTMl = "";
} */

var uniquePlatforms = [];
 for (var i = 0; i < platforms.length; i++){
 if(!uniquePlatforms.includes(platforms[i])){
    uniquePlatforms.push(platforms[i])
 }
}
console.log(uniquePlatforms);



var platformSelect = document.getElementById("Platforms");
for (var i = 0; i < uniquePlatform.length; i++){
    var el = document.createElement("option");
    el.innerHTMl = uniquePlatforms[i];
    el.value = uniquePlatforms [i];

    platformSelect.appendChild(el);


}


    // var platformSelect = document.getElementById("platforms")
    //     for (var i = 0; i < uniquePlatforms.length; i++)
    //         var el = document.createElement("option")

    //         el.innerHTML = 
